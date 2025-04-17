"use client"

import { useState } from "react"
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
} from "react-native"
import { useNavigation } from "@react-navigation/native"

const { width, height } = Dimensions.get("window")

const wp = (size) => (width / 100) * size
const hp = (size) => (height / 100) * size

// Données des plats pour la démonstration
const foodItems = [
  {
    id: "1",
    name: "Pizza peperoni",
    price: "350 da",
    image: require("../assets/pizza.png"),
    rating: 4.9,
    isNew: true,
    isFavorite: false,
  },
  {
    id: "2",
    name: "Burger",
    price: "350 da",
    image: require("../assets/burger.png"),
    rating: 4.8,
    isNew: true,
    isFavorite: true,
  },
  {
    id: "3",
    name: "Fries",
    price: "200 da",
    image: require("../assets/fries.png"),
    rating: 4.7,
    isNew: true,
    isFavorite: false,
  },
  {
    id: "4",
    name: "Pasta",
    price: "400 da",
    image: require("../assets/pasta.png"),
    rating: 4.9,
    isNew: true,
    isFavorite: false,
  },
]

const HomeScreen = () => {
  const [favorites, setFavorites] = useState(
    foodItems.reduce((acc, item) => ({ ...acc, [item.id]: item.isFavorite }), {}),
  )
  const navigation = useNavigation()

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const renderFoodItem = ({ item }) => (
    <TouchableOpacity style={styles.foodItem}>
      <TouchableOpacity style={styles.favoriteButton} onPress={() => toggleFavorite(item.id)}>
        <Image
          source={require("../assets/coeur.png")}
          style={[styles.heartIcon, { tintColor: favorites[item.id] ? "#FF0000" : "#DDDDDD" }]}
        />
      </TouchableOpacity>

      <Image source={item.image} style={styles.foodImage} />

      <View style={styles.ratingContainer}>
        <Image source={require("../assets/star.png")} style={styles.starIcon} />
        <Text style={styles.ratingText}>{item.rating}</Text>
      </View>

      {item.isNew && (
        <View style={styles.newBadge}>
          <Image source={require("../assets/flash.png")} style={styles.flashIcon} />
          <Text style={styles.newBadgeText}>NEW</Text>
        </View>
      )}

      <Text style={styles.foodName}>{item.name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{item.price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Image source={require('../assets/plus.png')} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={styles.headerText}>Home</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.notificationBadge}>
                
              </View>
              <Image source={require("../assets/profilehome.png")} style={styles.profileIcon} />
            </View>
          </View>

          <View style={styles.searchRow}>
            <View style={styles.searchContainer}>
              <Image source={require("../assets/search.png")} style={styles.searchIcon} />
              <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#888" />
            </View>
            <View style={styles.cartContainer}>
              <TouchableOpacity>
                <Image source={require("../assets/panier.png")} style={styles.cartIcon} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Promo Banner */}
          <TouchableOpacity style={styles.promoBanner}>
            <View style={styles.promoTextContainer}>
              <Text style={styles.promoPercentage}>20% OFF</Text>
              <Text style={styles.promoTitle}>MARS BIG{"\n"}PROMO</Text>
              <Text style={styles.promoValidity}>Valid until Mars 30th</Text>
            </View>
            <Image source={require("../assets/promoheader.png")} style={styles.promoImage} />
          </TouchableOpacity>
        </View>

        {/* Food Items Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Picked for you</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View all</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={foodItems}
            renderItem={renderFoodItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.foodList}
          />
        </View>

        {/* Book a Table Card */}
        <View style={styles.serviceCardContainer}>
          <View style={styles.bookTableCard}>
            <View style={styles.bookTableTextContainer}>
              <Text style={styles.bookTableTitle}>Book a table in advance</Text>
              <Text style={styles.bookTableSubtitle}>and save your time</Text>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book here</Text>
                <Image source={require("../assets/fleche_droite.png")} style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
            <Image source={require("../assets/table-image.png")} style={styles.tableImage} />
          </View>
        </View>

        {/* Call Waiter Card */}
        <View style={styles.serviceCardContainer}>
          <View style={styles.callWaiterCard}>
            <Text style={styles.callWaiterTitle}>Call the waiter</Text>
            <View style={styles.waiterImageContainer}>
              <Image source={require("../assets/waiter.png")} style={styles.waiterImage} />
            </View>
            <TouchableOpacity style={styles.callButton}>
              <Text style={styles.callButtonText}>Call waiter</Text>
              <Image source={require("../assets/fleche_droite.png")} style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Extra space to ensure content isn't hidden behind nav bar */}
        <View style={{ height: hp(10) }} />
      </ScrollView>

     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: hp(2.5),
    backgroundColor: "#fff",
  },
  headerText: {
    fontFamily: "SFProDisplay-Bold",
    fontWeight: "700",
    fontSize: wp(8.5),
    lineHeight: hp(4),
    letterSpacing: 0,
  },
  profileIcon: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
  },
  notificationBadge: {
    position: "relative",
    marginRight: wp(3),
  },
  notificationText: {
    position: "absolute",
    top: -hp(1),
    right: -wp(1),
    backgroundColor: "#FF3B30",
    color: "#fff",
    borderRadius: wp(5),
    width: wp(4),
    height: wp(4),
    textAlign: "center",
    fontSize: wp(2.5),
    lineHeight: wp(4),
    zIndex: 1,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp(2),
    justifyContent: "space-between",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: wp(2.7),
    paddingHorizontal: wp(3),
    flex: 1,
    height: hp(6),
  },
  searchIcon: {
    width: wp(5),
    height: wp(5),
    marginRight: wp(2),
  },
  searchInput: {
    flex: 1,
    color: "#555",
    fontSize: wp(4),
  },
  cartContainer: {
    marginLeft: wp(3),
    backgroundColor: "#FFC01D",
    height: hp(6),
    width: wp(13),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(2.7),
  },
  cartIcon: {
    width: wp(6),
    height: hp(3),
    resizeMode: "contain",
  },
  promoBanner: {
    flexDirection: "row",
    backgroundColor: "#FF3B30",
    borderRadius: wp(4),
    marginTop: hp(2),
    padding: wp(4),
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
  promoTextContainer: {
    flex: 1,
  },
  promoPercentage: {
    color: "#fff",
    fontSize: wp(4),
    fontWeight: "700",
  },
  promoTitle: {
    color: "#000",
    fontSize: wp(6),
    fontWeight: "bold",
    marginVertical: hp(0.5),
  },
  promoValidity: {
    color: "#FFC01D",
    fontSize: wp(3.5),
  },
  promoImage: {
    width: wp(30),
    height: hp(10),
    resizeMode: "contain",
  },
  sectionContainer: {
    paddingHorizontal: wp(4),
    marginTop: hp(2),
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(1.5),
  },
  sectionTitle: {
    fontSize: wp(4.5),
    fontWeight: "600",
    color: "#000",
  },
  viewAllText: {
    fontSize: wp(3.5),
    color: "#888",
  },
  foodList: {
    paddingRight: wp(4),
  },
  foodItem: {
    width: wp(40),
    marginRight: wp(3),
    backgroundColor: "#fff",
    borderRadius: wp(3),
    padding: wp(2),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    position: "relative",
  },
  favoriteButton: {
    position: "absolute",
    top: wp(2),
    right: wp(2),
    zIndex: 10,
  },
  heartIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: "contain",
  },
  foodImage: {
    width: "100%",
    height: wp(25),
    resizeMode: "contain",
    marginBottom: hp(1),
  },
  // Couleur corrigée pour le rating: #FFC107
  ratingContainer: {
    position: "absolute",
    bottom: hp(6),
    left: wp(2),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFE196", // Couleur exacte fournie
    borderRadius: wp(5),
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.2),
  },
  starIcon: {
    width: wp(3.5),
    height: wp(3.5),
    marginRight: wp(1),
    tintColor: "#FFC107", // Même couleur que le fond
  },
  ratingText: {
    fontSize: wp(3.2),
    fontWeight: "700",
    color: "#FFC107",
  },
  // Couleur corrigée pour le badge NEW: #FFD747
  newBadge: {
    position: "absolute",
    bottom: hp(6),
    right: wp(2),
    backgroundColor: "#9E090F", 
    borderRadius: wp(5),
    paddingHorizontal: wp(1.2),
    paddingVertical: hp(0.4),
    flexDirection: "row",
    alignItems: "center",
  },
  flashIcon: {
    width: wp(3),
    height: wp(3),
    marginRight: wp(1),
    tintColor: "#FFD747", // Couleur exacte fournie pour le texte NEW
  },
  newBadgeText: {
    color: "#FFD747", // Couleur exacte fournie
    fontSize: wp(2.5),
    fontWeight: "700",
  },
  foodName: {
    fontSize: wp(4),
    fontWeight: "700",
    color: "#003366",
  
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // Couleur corrigée pour le prix: #437F40
  priceText: {
    fontSize: wp(4),
    fontWeight: "600",
    color: "#437F40", // Couleur exacte fournie
  },
  // Couleur corrigée pour le bouton +: #FFC107
  addButton: {
    backgroundColor: "#FFC107", // Couleur exacte fournie
    borderRadius: wp(10),
    width: wp(9),
    height: wp(5),
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontSize: wp(5),
    fontWeight: "bold",
    color: "#FFFFFF",
    lineHeight: wp(7),
    textAlign: "center",
  },
  serviceCardContainer: {
    paddingHorizontal: wp(4),
    marginTop: hp(2),
  },
  bookTableCard: {
    backgroundColor: "#FFF8E1",
    borderRadius: wp(4),
    padding: wp(4),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookTableTextContainer: {
    flex: 1,
  },
  bookTableTitle: {
    fontSize: wp(4),
    fontWeight: "600",
    color: "#000",
  },
  bookTableSubtitle: {
    fontWeight:'700',
    fontSize: wp(3.5),
    color: "#000",
    marginBottom: hp(1),
  },
  bookButton: {
    marginLeft:wp(6),
    backgroundColor: "#8B0000",
    borderRadius: wp(5),
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(3),
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  bookButtonText: {
    color: "#fff",
    fontSize: wp(3.5),
    fontWeight: "500",
    marginRight: wp(1),
  },
  arrowIcon: {
    width: wp(4),
    height: wp(4),
    tintColor: "#fff",
  },
  tableImage: {
    width: wp(30),
    height: hp(12),
    resizeMode: "contain",
  },
  callWaiterCard: {
    backgroundColor: "#E3F2FD",
    borderRadius: wp(4),
    padding: wp(4),
    alignItems: "center",
  },
  callWaiterTitle: {
     position:'absolute',
     marginTop:hp(2),
     marginLeft:wp(6),
    fontSize: wp(4),
    fontWeight: "600",
    color: "#000",
    marginBottom: hp(1),
    alignSelf: "flex-start",
  },
  waiterImageContainer: {
    alignItems: "center",
    marginBottom: hp(1),
  },
  waiterImage: {
    marginRight:wp(-70),
    width: wp(20),
    height: hp(8),
    resizeMode: "contain",
  },
  callButton: {
    marginTop:wp(-10),
    backgroundColor: "#9BC7FF",
    borderRadius: wp(5),
    paddingVertical: hp(0.8),
    paddingHorizontal: wp(3),
    flexDirection: "row",
    alignItems: "center",
    
  },
  callButtonText: {
    color: "#fff",
    fontSize: wp(3.5),
    fontWeight: "500",
    marginRight: wp(1),
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: hp(1.5),
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    width: wp(6),
    height: hp(3),
    marginBottom: hp(0.6),
  },
  navItemM: {
    marginTop: hp(-4.5),
    backgroundColor: "#FFC01D",
    borderRadius: wp(50),
    alignItems: "center",
    justifyContent: "center",
    width: wp(18),
    height: wp(18),
  },
  navIconM: {
    width: wp(10),
    height: wp(10),
    resizeMode: "contain",
  },
  navText: {
    color: "#555",
    fontSize: wp(3.2),
  },
})

export default HomeScreen
