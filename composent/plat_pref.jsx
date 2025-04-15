import { View } from "react-native";



export default function PlatPref({ item, removeItem }) {
    return (
        <View >
        <View key={item.id_plat} style={styles.foodItem}>
            <Image source={require="../assets/quick-snack.png"} style={styles.foodImage} />
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
                <TouchableOpacity style={styles.heartButton} onPress={() => removeItem(item.id_plat)}>
                  <Image source={require("../assets/coeur.png")} style={styles.heartIcon} />
                </TouchableOpacity>
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