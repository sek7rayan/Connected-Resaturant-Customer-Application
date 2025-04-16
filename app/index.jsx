import { registerRootComponent } from 'expo';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../screens/menu';
import Description from '../screens/description';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Description" component={Description} />
      </Stack.Navigator>
   
  );
};

registerRootComponent(App);

export default App;
