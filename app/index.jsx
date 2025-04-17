import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import HomeScreen from '@/screens/home';
import MenuScreen from '@/screens/menu';
import MyListScreen from '@/screens/mylist';
import MycartScreen from '@/screens/mycart';
import { CartProvider } from '@/CartContext';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
 <CartProvider>
  
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
          <Tab.Screen name="MyList" component={MyListScreen} />
          <Tab.Screen name="MyCart" component={MycartScreen} />
        </Tab.Navigator>
   
 </CartProvider>
     

  );
}