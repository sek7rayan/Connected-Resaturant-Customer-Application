import { registerRootComponent } from 'expo';
import MyList from '../screens/mylist';
import MenuScreen from '../screens/menu';
import DescriptionScreen from '../screens/description';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <HomeScreen/>
  )
};

registerRootComponent(App);

export default App;
