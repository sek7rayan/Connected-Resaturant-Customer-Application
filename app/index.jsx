import { registerRootComponent } from 'expo';
import MyList from '../screens/mylist';
import Api_plat_pref from '../api_pla_pref';





const App = () => {
  return (
    <MyList/>
  );
};

registerRootComponent(App);

export default App;