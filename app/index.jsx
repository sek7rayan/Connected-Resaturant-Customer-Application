import { registerRootComponent } from 'expo';
import MyList from '../screens/mylist';
import MenuScreen from '../screens/menu';
import DescriptionScreen from '../screens/description';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';


const Stack = createNativeStackNavigator();


const App = () => {
  const [cartItems, setCartItems] = useState([]);
console.log(cartItems);
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}} 
      initialParams={{ cartItems : cartItems, setCartItems : setCartItems}} />

      <Stack.Screen name="Description" component={DescriptionScreen} options={{headerShown: false}}
       initialParams={{ cartItems : cartItems, setCartItems : setCartItems}}
      />
    </Stack.Navigator>
  )
};

registerRootComponent(App);

export default App;