import axios from "axios";

const API_URL = "https://pfebackend-production.up.railway.app/api";


const getFavoritePlats = async (id_client) => {
    try {
      // Construire l'URL avec l'id_client
      const url = `${API_URL}/platfavorie/${id_client}`;
  
      // Effectuer la requête GET
      const response = await axios.get(url);
  
      // Vérifier si la réponse est réussie
      if (response.status === 200) {
        return response.data; // Retourne les plats favoris
      }
    } catch (error) {
      // Gestion des erreurs
      if (error.response) {
        // Erreur côté serveur (404 ou autre)
        if (error.response.status === 404) {
          console.error("Aucun plat trouvé pour cet utilisateur.");
        } else {
          console.error("Erreur serveur :", error.response.data.message);
        }
      } else if (error.request) {
        // Aucun réponse reçue
        console.error("Aucune réponse reçue du serveur.");
      } else {
        // Erreur lors de la configuration de la requête
        console.error("Erreur lors de la requête :", error.message);
      }
  
      // Lancer à nouveau l'erreur pour que l'appelant puisse la gérer
      throw error;
    }
  };
  
  export default getFavoritePlats;
