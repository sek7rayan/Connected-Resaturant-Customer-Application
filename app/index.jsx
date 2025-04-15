import { registerRootComponent } from 'expo';
import MyList from '../screens/mylist';
import Api_plat_pref from '../api';

Api_plat_pref.deleteFavoritePlat(1, 12);



const App = () => {
  return (
    <MyList/>
  );
};

registerRootComponent(App);

export default App;