import { registerRootComponent } from 'expo';
import MyList from '../screens/mylist';
import MenuScreen from '../screens/menu';





const App = () => {
  return (
   <MenuScreen />
  );
};

registerRootComponent(App);

export default App;