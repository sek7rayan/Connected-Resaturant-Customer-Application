import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import HomeScreen from '@/screens/home';
import MenuScreen from '@/screens/menu';
import MyListScreen from '@/screens/mylist';
import MycartScreen from '@/screens/mycart';
import { CartProvider } from '@/CartContext';
import {Ionicons , FontAwesome , MaterialCommunityIcons } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import AntDesign from '@expo/vector-icons/AntDesign';
const Tab = createBottomTabNavigator();


export default function App() {

  const Profile = () => {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    );
  }
  return (
 <CartProvider>
  
        <Tab.Navigator    screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,

        }} >
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" size={size} color={color} />
           
            ),
          }}/>
          <Tab.Screen name="Menu" component={MenuScreen} 
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
          <Tab.Screen name="Profile" component={Profile} 
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