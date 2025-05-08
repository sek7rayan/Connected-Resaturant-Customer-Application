 import { View , Text} from "react-native";
 import { useState, useEffect } from 'react';
 import { db, auth } from '../firebase';
 import { onAuthStateChanged } from 'firebase/auth';
 import { collection, query, where, getDocs, setLogLevel } from 'firebase/firestore';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 

 export default function NotificationScreen() {
  const [clientId, setClientId] = useState(null);  
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const calculateTimeElapsed = (date) => {
    if (!date) return 'Unknown time';
    
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const id = await AsyncStorage.getItem('clientId');
        if (id) {
          setClientId(parseInt(id));
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };
    checkLoginStatus();
  }, []);

  const id_client = clientId; 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ Utilisateur connecté :", user.uid);
        setIsAuthReady(true);
      } else {
        console.log("❌ Aucun utilisateur connecté");
        setIsAuthReady(false);
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch notifications from Firebase
  useEffect(() => {
    if (!isAuthReady) return;
  
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, 'client_rating_notifications'),
          where('id_client', '==', id_client),
          where('isRead', '==', false)
        );
  
        const querySnapshot = await getDocs(q);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
  
        const notificationsData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const createdAt = data.createdAt?.toDate?.() || null;
          return {
            id: doc.id,
            ...data,
            createdAt,
            time: calculateTimeElapsed(createdAt)
          };
        }).filter(order => {
          const orderDate = order.createdAt;
          return orderDate && orderDate >= today;
        });
  
        setNotifications(notificationsData);
      } catch (err) {
        console.error("Erreur:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  

    fetchData();
  
    const intervalId = setInterval(() => {
        fetchData();
    }       , 10000); 
  
    return () => clearInterval(intervalId);
  }, [isAuthReady]);
  
console.log('hii')
console.log("Notifications:", notifications);
    return (
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Notification</Text>
     </View>
      );
    }