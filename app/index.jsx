import { registerRootComponent } from 'expo';
import MyList from '../screens/mylist';
import MenuScreen from '../screens/menu';
import DescriptionScreen from '../screens/description';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Stack.Navigator initialRouteName="Menu">
      <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown: false}} />
      <Stack.Screen name="Description" component={DescriptionScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  )
};

registerRootComponent(App);

export default App;