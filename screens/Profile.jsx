import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  FlatList,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api_maladie from "@/api_maladie";
import Api_login_register from "@/api_login_register";

const { width, height } = Dimensions.get("window");
const wp = (size) => (width / 100) * size;
const hp = (size) => (height / 100) * size;

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [healthAlertsVisible, setHealthAlertsVisible] = useState(false);
  const [availableHealthIssues, setAvailableHealthIssues] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    points: "0 points",
    healthIssues: [],
  });
  const [selectedHealthIssues, setSelectedHealthIssues] = useState([]);
  const [clientId, setClientId] = useState(null);

  // Charger les données du client et les maladies disponibles
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les données du client depuis le localStorage
        const storedUser = await AsyncStorage.getItem("userData");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUserData({
            name: parsedUser.nom || "",
            email: parsedUser.email || "",
            age: parsedUser.age ? `${parsedUser.age} ans` : "",
            points:  "0 points",
            healthIssues: [],
          });
          setClientId(parsedUser.id_client);
          setSelectedHealthIssues(parsedUser.maladies || []);
        }

        // Récupérer les maladies disponibles depuis l'API
        const maladiesResponse = await Api_maladie.getMaladies();
        if (maladiesResponse && maladiesResponse.data) {
          setAvailableHealthIssues(maladiesResponse.data.maladies || []);
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
      }
    };

    fetchData();
  }, []);

  // Fonction pour basculer la sélection d'un problème de santé
  const toggleHealthIssue = (issue) => {
    if (issue === "None") {
      setSelectedHealthIssues(["None"]);
      return;
    }

    if (selectedHealthIssues.includes("None")) {
      setSelectedHealthIssues([issue]);
      return;
    }

    if (selectedHealthIssues.includes(issue)) {
      setSelectedHealthIssues(selectedHealthIssues.filter((item) => item !== issue));
    } else {
      setSelectedHealthIssues([...selectedHealthIssues, issue]);
    }
  };

  // Fonction pour sauvegarder les problèmes de santé sélectionnés
  const saveHealthIssues = async () => {
    try {
      if (!clientId) return;

      // Mettre à jour les maladies du client via l'API
      await Api_login_register.registerClient(
        { id_client: clientId },
        selectedHealthIssues
      );

      // Mettre à jour les données locales
      setUserData((prev) => ({
        ...prev,
        healthIssues: selectedHealthIssues,
      }));

      // Fermer le modal
      setHealthAlertsVisible(false);

      // Mettre à jour le localStorage
      const storedUser = await AsyncStorage.getItem("userData");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        await AsyncStorage.setItem(
          "userData",
          JSON.stringify({
            ...parsedUser,
            maladies: selectedHealthIssues,
          })
        );
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des maladies:", error);
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Image
            source={require("../assets/fleche_gauche.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      {/* Contenu principal avec défilement */}
      <ScrollView
        style={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Image de fond */}
        <View style={styles.backgroundContainer}>
          <Image
            source={require("../assets/background_image.png")}
            style={styles.backgroundImage}
          />
        </View>

        {/* Profil info */}
        <View style={styles.profileInfoSection}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require("../assets/photo_profile.png")}
              style={styles.profileImage}
            />
          </View>

          <View style={styles.userInfoContainer}>
            <View style={styles.nameRow}>
              <Text style={styles.userName}>{userData.name}</Text>
              <TouchableOpacity style={styles.editButton}>
                {/*<Image source={require('../assets/stylo.png')} style={styles.editIcon} /> */}
              </TouchableOpacity>
            </View>
            <Text style={styles.userEmail}>{userData.email}</Text>
            <Text style={styles.userAge}>{userData.age}</Text>
            <Text style={styles.userPoints}>{userData.points}</Text>
          </View>
        </View>

        {/* Section Health Alerts */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Health Alerts</Text>
            <TouchableOpacity onPress={() => setHealthAlertsVisible(true)}>
              <Image
                source={require("../assets/clock.png")}
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Affichage des problèmes de santé */}
          <View style={styles.healthIssuesContainer}>
            {userData.healthIssues.map((issue, index) => (
              <View key={index} style={styles.healthIssueTag}>
                <Text style={styles.healthIssueText}>{issue}</Text>
              </View>
            ))}
          </View>

          {/* Modal pour les problèmes de santé */}
          <Modal
            visible={healthAlertsVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setHealthAlertsVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Health Issues</Text>
                <ScrollView style={styles.healthOptionsList}>
                  {availableHealthIssues.map((item) => (
                    <TouchableOpacity
                      key={item.id_maladie}
                      style={[
                        styles.healthOption,
                        selectedHealthIssues.includes(item.nom) &&
                          styles.selectedOption,
                      ]}
                      onPress={() => toggleHealthIssue(item.nom)}
                    >
                      <Text style={styles.healthOptionText}>{item.nom}</Text>
                      {selectedHealthIssues.includes(item.nom) && (
                        <Text style={styles.checkIcon}>✓</Text>
                      )}
                    </TouchableOpacity>
                  ))}
                </ScrollView>
                <View style={styles.modalButtonsContainer}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.cancelButton]}
                    onPress={() => setHealthAlertsVisible(false)}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.saveButton]}
                    onPress={saveHealthIssues}
                  >
                    <Text style={styles.saveButtonText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        {/* Espace supplémentaire en bas */}
        <View style={{ height: hp(10) }} />
      </ScrollView>
    </View>
  );
};

// Les styles restent exactement les mêmes que dans votre fichier original
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp(5),
    paddingVertical: hp(2),
    backgroundColor: "#fff",
  },
  backButton: {
    marginRight: wp(4),
  },
  backIcon: {
    width: wp(6),
    height: wp(6),
  },
  headerText: {
    fontSize: wp(7),
    fontWeight: "bold",
  },
  scrollContent: {
    flex: 1,
  },
  backgroundContainer: {
    height: hp(20),
    width: "100%",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  profileInfoSection: {
    flexDirection: "row",
    paddingHorizontal: wp(5),
    marginTop: hp(-2),
    marginBottom: hp(3),
  },
  profileImageContainer: {
    marginRight: wp(5),
  },
  profileImage: {
    marginTop: wp(-8),
    width: wp(24),
    height: wp(24),
    borderRadius: wp(11),
    borderWidth: 2,
    borderColor: "#fff",
  },
  userInfoContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: hp(2),
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(0.5),
  },
  userName: {
    fontSize: wp(5),
    fontWeight: "bold",
    marginRight: wp(2),
  },
  editButton: {
    padding: wp(1),
  },
  editIcon: {
    width: wp(4),
    height: wp(4),
    resizeMode: "contain",
  },
  userEmail: {
    fontSize: wp(3.5),
    color: "#666",
    marginBottom: hp(0.5),
  },
  userAge: {
    fontSize: wp(3.5),
    color: "#666",
    marginBottom: hp(0.5),
  },
  userPoints: {
    fontSize: wp(3.5),
    color: "#FFC01D",
    fontWeight: "bold",
  },
  sectionContainer: {
    paddingHorizontal: wp(5),
    marginBottom: hp(3),
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(1.5),
  },
  sectionTitle: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    color: "#000",
  },
  healthIssuesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  healthIssueTag: {
    backgroundColor: "#F8E6E6",
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    borderRadius: wp(5),
    marginRight: wp(2),
    marginBottom: hp(1),
  },
  healthIssueText: {
    fontSize: wp(3.5),
    color: "#8B0000",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: wp(80),
    maxHeight: hp(60),
    backgroundColor: "#fff",
    borderRadius: wp(3),
    padding: wp(4),
  },
  modalTitle: {
    fontSize: wp(5),
    fontWeight: "bold",
    marginBottom: hp(2),
    textAlign: "center",
  },
  healthOptionsList: {
    maxHeight: hp(40),
  },
  healthOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  selectedOption: {
    backgroundColor: "#F8F8F8",
  },
  healthOptionText: {
    fontSize: wp(4),
    color: "#333",
  },
  checkIcon: {
    color: "#4CAF50",
    fontSize: wp(4),
    fontWeight: "bold",
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp(2),
  },
  modalButton: {
    flex: 1,
    paddingVertical: hp(1.5),
    borderRadius: wp(2),
    alignItems: "center",
    marginHorizontal: wp(1),
  },
  cancelButton: {
    backgroundColor: "#F0F0F0",
  },
  cancelButtonText: {
    color: "#333",
    fontSize: wp(4),
    fontWeight: "500",
  },
  saveButton: {
    backgroundColor: "#FFC01D",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: wp(4),
    fontWeight: "bold",
  },
});

export default ProfileScreen;