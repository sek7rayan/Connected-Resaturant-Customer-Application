import { useState , useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, Dimensions } from "react-native"

import Api_plat_pref from "../api_pla_pref"
import Api_plat from "../api_plats"

const { width, height } = Dimensions.get("window")

const wp = (size) => (width / 100) * size
const hp = (size) => (height / 100) * size


/*
{foodItems.map((item) => (
          
        ))}

*/


const initialFoodItems = [
  {
    id: 1,
    title: "quick snack",
    image: require("../assets/quick-snack.png"),
    rating: "4.9",
    tag: "NEW",
    tagType: "new",
    description: "Served with sauce, and extra onion...",
    time: "40 min.",
    price: "350 da",
  },
  {
    id: 2,
    title: "King Burger",
    image: require("../assets/burgermylist.png"),
    rating: "4.9",
    tag: "Popular",
    tagType: "popular",
    description: "Served with sauce, and extra onion...",
    time: "50 min.",
    price: "450 da",
  },
  {
    id: 3,
    title: "Pasta with cheese",
    image: require("../assets/pasta-cheese.png"),
    rating: "4.9",
    tag: "NEW",
    tagType: "new",
    description: "Served with sauce, and extra onion...",
    time: "20 min.",
    price: "250 da",
  },
]

const MyListScreen = () => {
  const [foodItems, setFoodItems] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const id_client = 1;
        const favoritePlatsResponse = await Api_plat_pref.getFavoritePlats(id_client);
        const favoritePlats = favoritePlatsResponse.data.plats;
        const availablePlatsResponse = await Api_plat.getAvailablePlats();
        const availablePlats = availablePlatsResponse.data.plats;
        const merged = availablePlats.map((availablePlat) => {

          const isFavorite = favoritePlats.some((favoritePlat) => favoritePlat.id_plat === availablePlat.id_plat);
          if (isFavorite) {
            return availablePlat
            
          }
        
          });
        const food = merged.filter((item) => item !== undefined);
        setFoodItems(food);
      
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };
    fetchData();
  }, []);

  console.log("foodItems", foodItems)

  const removeItem = (id) => {
    setFoodItems(foodItems.filter((item) => item.id !== id))
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My List</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" placeholderTextColor="#888" />
          <View style={styles.cartContainer}>
            <TouchableOpacity>
              <Image source={require("../assets/panier.png")} style={styles.cartIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Category Filters */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButtonActive}>
          <Image source={require("../assets/all.png")} style={styles.categoryImage} />
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton}>
          <Image source={require("../assets/burger1.png")} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Burger</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton}>
          <Image source={require("../assets/pasta1.png")} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Pasta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryButton}>
          <Image source={require("../assets/seafood.png")} style={styles.categoryImage} />
          <Text style={styles.categoryText}>Sea Food</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Food Items List */}
      <ScrollView style={styles.foodListContainer} showsVerticalScrollIndicator={false}>
        

        {foodItems.length === 0 && (
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyListText}>Votre liste est vide</Text>
            <Text style={styles.emptyListSubText}>Ajoutez des articles à votre liste</Text>
          </View>
        )}
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
    flexDirection: "column",
    justifyContent: "space-between",
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: wp(2.7),
    width: wp(75),
  },
  searchInput: {
    flex: 1,
    color: "#555",
    paddingLeft: wp(6.7),
    fontSize: wp(4),
  },
  cartContainer: {
    marginRight: wp(-17.3),
    backgroundColor: "#FFC01D",
    height: hp(6.3),
    width: wp(13.1),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp(2.7),
  },
  cartIcon: {
    width: wp(6.7),
    height: hp(3.1),
    resizeMode: "contain",
  },
  categoryContainer: {
    paddingHorizontal: wp(4),
    backgroundColor: "#fff",
  },
  categoryButton: {
    alignItems: "center",
    marginRight: wp(5.3),
  },
  categoryButtonActive: {
    alignItems: "center",
    marginRight: wp(5.3),
  },
  categoryImage: {
    width: wp(19.7),
    height: hp(10.1),
    borderRadius: wp(2.7),
    marginBottom: hp(0.6),
  },
  categoryText: {
    fontFamily: "SFProDisplay-Bold",
    fontWeight: "700",
    fontSize: wp(4),
    lineHeight: hp(4),
    letterSpacing: 0,
  },

  foodListContainer: {
    flex: 1,
    paddingHorizontal: wp(4),
    marginTop: hp(-50),
    marginBottom: hp(8),
  },
  foodItem: {
    flexDirection: "row",
    marginBottom: hp(2.5),
    borderRadius: wp(3),
    overflow: "hidden",
  },
  foodImage: {
    width: wp(30),
    height: wp(30),
    borderRadius: wp(3),
  },
  foodDetails: {
    flex: 1,
    marginLeft: wp(3),
    justifyContent: "space-between",
  },
  foodHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(0.5),
  },
  ratingText: {
    color: "#FFC01D",
    fontWeight: "600",
    fontSize: wp(3.5),
    marginRight: wp(2),
  },
  tagContainer: {
    backgroundColor: "#FF3B30",
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.3),
    borderRadius: wp(1.5),
  },
  popularTag: {
    backgroundColor: "#FF9500",
  },
  tagText: {
    color: "white",
    fontSize: wp(3),
    fontWeight: "600",
  },
  foodTitle: {
    fontSize: wp(4.5),
    fontWeight: "700",
    marginBottom: hp(0.5),
  },
  foodDescription: {
    fontSize: wp(3.5),
    color: "#888",
    width: wp(50),
  },
  heartButton: {
    padding: wp(1),
  },
  heartIcon: {
    width: wp(6),
    height: wp(6),
    resizeMode: "contain",
  },
  foodFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(1),
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  clockIcon: {
    width: wp(4),
    height: wp(4),
    resizeMode: "contain",
  },
  timeText: {
    marginLeft: wp(1),
    fontSize: wp(3.5),
    color: "#555",
  },
  priceContainer: {
    backgroundColor: "#003366",
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.7),
    borderRadius: wp(5),
  },
  priceText: {
    color: "white",
    fontWeight: "700",
    fontSize: wp(3.5),
  },
  emptyListContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp(10),
    padding: wp(5),
  },
  emptyListText: {
    fontSize: wp(5),
    fontWeight: "700",
    marginBottom: hp(1),
  },
  emptyListSubText: {
    fontSize: wp(4),
    color: "#888",
  },
 
})

export default MyListScreen

/*
{
"Ajout_date": "2025-03-13T00:00:00.000Z", 
"Description_plat": "Nouilles japonaises dans un bouillon miso avec porc et œuf.",
"Prix_plat": 1350,
"categorie_plat": "Japonais",
"id_plat": 13,
"image_plat": "images/ramen.jpg",
"info_calorie": "400 kcal/bol", 
"nbrnote": null,
"nom_plat": "Ramen Japonais",
"note_plat": 4.8
     
     }


      {
    id: 1,
    title: "quick snack",
    image: require("../assets/quick-snack.png"),
    rating: "4.9",
    tag: "NEW",
    tagType: "new",
    description: "Served with sauce, and extra onion...",
    time: "40 min.",
    price: "350 da",
  }

*/