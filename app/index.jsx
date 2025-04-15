import { registerRootComponent } from 'expo';
import MyList from '../screens/mylist';
import MenuScreen from '../screens/menu';
import DescriptionScreen from '../screens/description';






const App = () => {
  return (
   <DescriptionScreen/>
  );
};

registerRootComponent(App);

export default App;