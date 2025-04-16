import { registerRootComponent } from 'expo';
import MyList from '../screens/mylist';
import MenuScreen from '../screens/menu';
import DescriptionScreen from '../screens/description';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< HEAD
import HomeScreen from '../screens/home';
=======
import { useState } from 'react';
import { CartProvider } from '../CartContext';
>>>>>>> 93d4f1b1dbeff7a3f9df32c93925cf9c972cef3d

const Stack = createNativeStackNavigator();


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
<<<<<<< HEAD
    <HomeScreen/>
=======
    <CartProvider>
      <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}}  />

      <Stack.Screen name="Description" component={DescriptionScreen} options={{headerShown: false}}/>
    </Stack.Navigator>

    </CartProvider>
    
>>>>>>> 93d4f1b1dbeff7a3f9df32c93925cf9c972cef3d
  )
};

registerRootComponent(App);

export default App;
