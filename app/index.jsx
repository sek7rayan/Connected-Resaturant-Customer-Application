import { registerRootComponent } from 'expo';
import SignUp from '../screens/signUp';
import Menu from '../screens/menu';
import MyList from '../screens/mylist';
import Description from '../screens/description';
import Mycart from '../screens/mycart';
import SignIn from '../screens/signIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack =createNativeStackNavigator();
const App = () => {
  return (
    <Description/>
  );
};

registerRootComponent(App);

export default App;