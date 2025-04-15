import axios from "axios";


const API_URL = "https://pfebackend-production.up.railway.app/api";

const Api_plat = {
    getAvailablePlats : async () => {
        try {
            const url = `${API_URL}/Gerant_plat`;
          const response = await axios.get(url);
          if (response.status === 200) {
            return response.data; 
          }
        } catch (error) {
    
          if (error.response) {
            if (error.response.status === 404) {
              console.error("Aucun plat disponible trouvé.");
            } else {
              console.error("Erreur serveur :", error.response.data.message);
            }
          } else if (error.request) {
            console.error("Aucune réponse reçue du serveur.");
          } else {
            console.error("Erreur lors de la requête :", error.message);
          }
      
          throw error;
        }
      }


}

export default Api_plat;