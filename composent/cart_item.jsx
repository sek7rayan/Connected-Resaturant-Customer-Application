import { View, Animated } from "react-native";
import { Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { Swipeable } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

const wp = (size) => (width / 100) * size;
const hp = (size) => (height / 100) * size;

export default function Cart_item({ item, onRemove, quantity }) {
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, 0, 0, 1],
    });
    
    return (
      <TouchableOpacity 
        style={styles.deleteBox} 
        onPress={onRemove}
        activeOpacity={0.6}
      >
        <Animated.Text
          style={[
            styles.deleteText,
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Supprimer
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      rightThreshold={40}
      onSwipeableRightOpen={onRemove}
    >
      <View style={styles.foodItem}>
        <Image source={require("../assets/quick-snack.png")} style={styles.foodImage} />
        <View style={styles.foodDetails}>
          <View style={styles.foodHeader}>
            <View>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>★ {item.note_plat}</Text>
              </View>
              <Text style={styles.foodTitle}>{item.nom_plat}</Text>
              <Text style={styles.foodDescription}>{item.Description_plat}</Text>
            </View>
          </View>
          <View style={styles.foodFooter}>
            <Text style={styles.quantityText}>Quantité: {quantity}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{(item.Prix_plat * quantity).toFixed(2)} DA</Text>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  foodItem: {
    flexDirection: "row",
    marginBottom: hp(2.5),
    borderRadius: wp(3),
    overflow: "hidden",
    backgroundColor: '#fff',
    padding: wp(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
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
  foodFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(1),
  },
  quantityText: {
    fontSize: wp(3.5),
    color: '#555',
  },
  priceContainer: {
    backgroundColor: "#003366",
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.7),
    borderRadius: wp(5),
    minWidth: wp(20),
    alignItems: 'center',
  },
  priceText: {
    color: "white",
    fontWeight: "700",
    fontSize: wp(3.5),
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: wp(5),
    borderRadius: wp(3),
    marginBottom: hp(2.5),
    height: '80%',
    alignSelf: 'center',
    marginLeft: wp(2),
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: wp(3.5),
  },
});