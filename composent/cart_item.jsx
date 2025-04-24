import { View } from "react-native";
import { Text, StyleSheet, TouchableOpacity, Image , Dimensions } from "react-native";


const { width, height } = Dimensions.get("window")

const wp = (size) => (width / 100) * size
const hp = (size) => (height / 100) * size



export default function Cart_item({ item }) {
    

    
      
    return (
        <View >
        <View key={item.id_plat} style={styles.foodItem}>
            <Image source={require("../assets/quick-snack.png")} style={styles.foodImage} />
            <View style={styles.foodDetails}>
              <View style={styles.foodHeader}>
                <View>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>★ {item.note_plat}</Text>
                    <View style={styles.tagContainer}>
                    </View>
                  </View>
                  <Text style={styles.foodTitle}>{item.nom_plat}</Text>
                  <Text style={styles.foodDescription}>{item.Description_plat}</Text>
                </View>
              
              </View>
              <View style={styles.foodFooter}>
              
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>{item.Prix_plat}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
    );
    }

const styles = StyleSheet.create({ 
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
      }})