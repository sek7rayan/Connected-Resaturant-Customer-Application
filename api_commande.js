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
      },
 createCommande : async (commandeData, plats) => {
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
  },
  getClientCommandes : async (id_client) => {
    try {

      const url = `${API_URL}/commandes/${id_client}`;

      const response = await axios.get(url);
  

      if (response.status === 200) {
        return response.data; 
      }
    } catch (error) {

      if (error.response) {
        if (error.response.status === 404) {
          console.error("Erreur : Aucune commande trouvée pour ce client.");
          throw new Error("Aucune commande trouvée pour ce client.");
        } else {
          console.error("Erreur serveur :", error.response.data.message);
          throw new Error("Erreur serveur");
        }
      }
    }
  }
}

  export default Api_commande;

  