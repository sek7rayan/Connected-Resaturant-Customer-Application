import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import HomeScreen from '@/screens/home';
import MenuScreen from '@/screens/menu';
import MyListScreen from '@/screens/mylist';
import DescriptionScreen from '@/screens/description';
import { CartProvider } from '@/CartContext';
import {Ionicons , MaterialCommunityIcons } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MycartScreen from '@/screens/mycart';
import ProfileScreen from '@/screens/Profile';
import MyOrdersScreen from '@/screens/my_orders';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs, setLogLevel } from 'firebase/firestore';

import AsyncStorage from '@react-native-async-storage/async-storage';





const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Menu = () => {

  const [clientId, setClientId] = useState(null);  
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  
    // Premier chargement
    fetchData();
  
    // Rafraîchissement automatique toutes les 10 secondes
    const intervalId = setInterval(fetchData, 10000);
  
    return () => clearInterval(intervalId);
  }, [isAuthReady]);
  
console.log('hii')
console.log("Notifications:", notifications);
  return (
  
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Description" component={DescriptionScreen} />
        <Stack.Screen name="Mycart" component={MycartScreen} />
      
        

      </Stack.Navigator>
      
   
  );
};

const Home = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Description" component={DescriptionScreen} />
      <Stack.Screen name="Mycart" component={MycartScreen} />
   
    </Stack.Navigator>
  );
}



export default function Main() {

  


  return (
 <CartProvider>
  
        <Tab.Navigator    screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,

        }} >
          <Tab.Screen name="Home" component={Home} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" size={size} color={color} />
           
            ),
          }}/>
          <Tab.Screen name="Menu" component={Menu} 
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="restaurant-outline" size={size} color={color} />
           
            ),
          }}
          
          />

          <Tab.Screen name="MyList" component={MyListScreen} 
           options={{
            tabBarLabel: 'My List',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="hearto" size={size} color={color} />
           
            ),
          }}  
          />
          <Tab.Screen name="Orders" component={MyOrdersScreen} 
          options={{
            tabBarLabel: 'My orders',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="reorder" size={size} color={color} />
           
            ),
          }}
          />
          <Tab.Screen name="Profile" component={ProfileScreen} 
           options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" size={size} color={color} />
           
            ),
          }}
          />
         
          
        </Tab.Navigator>
   
 </CartProvider>
     

  );
}