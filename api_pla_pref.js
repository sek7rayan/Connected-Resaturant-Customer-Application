import axios from "axios";

const API_URL = "https://pfebackend-production.up.railway.app/api";


const Api_plat_pref = {
  addFavoritePlat : async (id_plat, id_client) => {
    try {
      const body = {
        id_plat,
        id_client,
      };
      const response = await axios.post(`${API_URL}/platfavorie`, body);
      if (response.status === 201) {
        return response.data; 
      }
    } catch (error) {
      if (error.response) {
        console.error("Erreur serveur :", error.response.data.message);
      } else if (error.request) {
        console.error("Aucune réponse reçue du serveur.",error);
      } else {
        console.error("Erreur lors de la requête :", error.message);
      }
      throw error;
    }
  },


  getFavoritePlats : async (id_client) => {
    try {
      const url = `${API_URL}/platfavorie/${id_client}`;
      const response = await axios.get(url);
      if (response.status === 200) {
        return response.data; 
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          console.error("Aucun plat trouvé pour cet utilisateur.");
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
  },


  deleteFavoritePlat : async (id_client, id_plat) => {
    try {
      const url = `${API_URL}/platfavorie/${id_client}`;
      await axios.delete(url, {
        data: { id_plat },
      });
  
      console.log("Plat supprimé avec succès.");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          console.error("Erreur : Plat non trouvé ou suppression impossible.");
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




export default Api_plat_pref;


  