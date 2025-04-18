import axios from "axios";

const API_URL = "https://pfebackend-production.up.railway.app/api";

const Api_commande = {


 getCommandes : async () => {
        try {
          const response = await axios.get(`${API_URL}/commandes`);
      
          if (response.status === 200) {
            return response.data; 
          }
        } catch (error) {

          if (error.response) {
            if (error.response.status === 404) {
              console.error("Aucune commande trouvée :", error.response.data.message);
            } else {
              console.error("Erreur serveur :", error.response.data.message);
            }
          }
  
          throw error;
        }
      }
}
 createCommande = async (commandeData, plats) => {
    try {
      const body = {
        commandeData,
        plats,
      };

      const response = await axios.post(`${API_URL}/commandes`, body);

      if (response.status === 201) {
        return response.data; 
      }
    } catch (error) {

      if (error.response) {
        if (error.response.status === 400) {
          console.error("Erreur : ID commande et plats sont obligatoires.");
        } else {
          console.error("Erreur serveur :", error.response.data.message);
        }
    }
      throw error;
    }
  };

  export default Api_commande;