import { registerRootComponent } from 'expo';
import MyList from '../screens/mylist';
import getFavoritePlats from '../api'

const id_client = 21; // Remplacez par l'ID du client que vous souhaitez utiliser
getFavoritePlats(id_client)
  .then((data) => {
    console.log("Liste des plats favoris :", data);
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des plats favoris :", error);
  });
const App = () => {
  return (
    <MyList/>
  );
};

registerRootComponent(App);

export default App;