import { registerRootComponent } from 'expo';
import { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  collection,
  query,
  where,
  getDocs,
  setLogLevel
} from 'firebase/firestore';
import { Text } from 'react-native';

setLogLevel('debug');

const App = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  const id_client = 1;

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

  // Dans index.jsx
useEffect(() => {
  if (!isAuthReady) return;

  const fetchData = async () => {
    try {
      const q = query(
        collection(db, 'notifications_client'),
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

  // Premier chargement
  fetchData();

  // Rafraîchissement automatique toutes les 10 secondes
  const intervalId = setInterval(fetchData, 10000);

  return () => clearInterval(intervalId);
}, [isAuthReady]);

  // Fonction pour calculer le temps écoulé
  const calculateTimeElapsed = (date) => {
    if (!date) return 'Date inconnue';
    
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} secondes`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} heures`;
    return `${Math.floor(diffInSeconds / 86400)} jours`;
  };


  console.log("Notifications:", notifications);
  return (
   <Text>hi</Text>
  );
};


export default App;
/*
{"createdAt": 2025-04-26T13:54:17.879Z,
 "id": "oAhnbbYljeQd589tedXQ",
  "id_client": 1, 
  "id_commande": "80015",
   "id_table": 3,
    "isRead": false,
     "message": "Votre commande est en cours de préparation", "status": "en_cours_de_préparation", "time": "2 minutes"}

*/