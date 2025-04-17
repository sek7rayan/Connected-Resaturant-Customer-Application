import { registerRootComponent } from 'expo';
import MyList from '../screens/mylist';
import MenuScreen from '../screens/menu';
import DescriptionScreen from '../screens/description';
import SignUpScreen1 from '../screens/signUp1';
import SignUpScreen2 from '../screens/signUp2';
import SignUpScreen3 from '../screens/signUp3';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { CartProvider } from '../CartContext';

const Stack = createNativeStackNavigator();


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    
      <CartProvider>
        <Stack.Navigator initialRouteName="SignUp1">
        
          <Stack.Screen name="SignUp1" component={SignUpScreen1} options={{headerShown: false}} />
          <Stack.Screen name="SignUp2" component={SignUpScreen2} options={{headerShown: false}} />
          <Stack.Screen name="SignUp3" component={SignUpScreen3} options={{headerShown: false}} />
          
          
          <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}} />
          <Stack.Screen name="Description" component={DescriptionScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      </CartProvider>
    
  );
};

registerRootComponent(App);

export default App;
