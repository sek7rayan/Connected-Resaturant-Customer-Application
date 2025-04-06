
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/signUp';
import Menu from '../screens/menu';
import MyList from '../screens/mylist';
import Description from '../screens/description';

const App = ()=>{
  return <Description/>

};
registerRootComponent(App);

export default App;
 

