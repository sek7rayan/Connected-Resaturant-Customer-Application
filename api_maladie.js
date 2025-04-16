import axios from "axios";



const API_URL = "https://pfebackend-production.up.railway.app/api";

const Api_maladie = {
    getClientMaladies : async (id_client) => {
        try {
          const body = {
            id_client,
          };
          const response = await axios.get(`${API_URL}/clientmaladie`,  body );
      
          if (response.status === 200) {
            return response.data; 
          }
        } catch (error) {
      
          if (error.response) {
            console.error("Erreur serveur :", error.response.data.message);
          } else if (error.request) {
            console.error("Aucune réponse reçue du serveur.");
          } 
          throw error;
        }
      },
      getMaladies : async () => {
        try {
          const response = await axios.get(`${API_URL}/maladie`);
      
          if (response.status === 200) {
            return response.data; 
          }
        } catch (error) {
          if (error.response) {
            if (error.response.status === 404) {
              console.error("Aucune maladie trouvée :", error.response.data.message);
            } else {
              console.error("Erreur serveur :", error.response.data.message);
            }
         
          throw error;
        }
      };},
      getMaladiesByPlat :async (id_plat) => {
        try {
          const url = `${API_URL}/platmaladie/${id_plat}`;
          const response = await axios.get(url);
    
          if (response.status === 200) {
            return response.data; 
          }
        } catch (error) {
    
          if (error.response) {
            if (error.response.status === 404) {
              console.error(`Aucune maladie trouvée pour le plat avec id ${id_plat}.`);
            } else {
              console.error("Erreur serveur :", error.response.data.message);
            }
            }
          throw error;
        }
      }
    





}


export default Api_maladie;