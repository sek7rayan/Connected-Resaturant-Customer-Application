import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image,
  Dimensions,
  TextInput,
  Alert
} from 'react-native';
import Api_commande from '../api_commande';
import { useContext , useCallback , useEffect ,useState } from 'react';
import { CartContext } from '../CartContext';
import { useFocusEffect } from '@react-navigation/native';
import Api_plat from '../api_plats';
import Cart_item from '@/composent/cart_item';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');

const wp = (size) => (width / 100) * size;
const hp = (size) => (height / 100) * size;

const MycartScreen = () => {
  const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);
  const [foodItems, setFoodItems] = useState([]);
  const [tableNumber, setTableNumber] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      foodItems.forEach(item => {
        const cartItem = cartItems.find(cartItem => cartItem.id_plat === item.id_plat);
        if (cartItem) {
          total += item.Prix_plat * cartItem.quantity;
        }
      });
      setTotalPrice(total);
    };
    calculateTotal();
  }, [foodItems, cartItems]);

  useFocusEffect(
    useCallback(() => {
      const fetchData = async () => {
        try {
          const availablePlatsResponse = await Api_plat.getAvailablePlats();
          const availablePlats = availablePlatsResponse.data.plats;
          const merged = availablePlats.map((availablePlat) => {
            const cartItem = cartItems.find((item) => item.id_plat === availablePlat.id_plat);
            if (cartItem) {
              return availablePlat;
            }
            return null;
          });
          const food = merged.filter((item) => item !== null);
          setFoodItems(food);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error);
        }
      };
      fetchData();
    }, [cartItems])
  );

  const handleRemoveItem = (id_plat) => {
    removeFromCart(id_plat);
  };

  const send_commandes = async () => {
    if (!tableNumber) {
      Alert.alert('Erreur', 'Veuillez entrer un numéro de table');
      return;
    }

    if (cartItems.length === 0) {
      Alert.alert('Erreur', 'Votre panier est vide');
      return;
    }

    const commandeData = {
      id_client: 1,
      mode_payment: "cash",
      id_table: parseInt(tableNumber)
    };

    const plats = cartItems.map(item => ({
      id_plat: item.id_plat,
      quantity: item.quantity
    }));
 
    try {
      const response = await Api_commande.createCommande(commandeData, plats);
      console.log('Commande créée avec succès :', response);
      Alert.alert('Succès', 'Commande passée avec succès');
      setCartItems([]);
      setTableNumber('');
    } catch (error) {
      console.error('Erreur lors de la création de la commande :', error);
      Alert.alert('Erreur', 'Une erreur est survenue lors de la commande');
    }
  }

  return (
    <View style={styles.container}>
       <View style={styles.header}>
          <Text style={styles.headerText}>My cart</Text>
        </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image 
            source={require('../assets/poubelle.png')} 
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>Votre panier est vide</Text>
        </View>
      ) : (
        <>
          <Text style={styles.sectionTitle}>Articles :</Text>
          <ScrollView 
            style={styles.itemsContainer}
            contentContainerStyle={styles.itemsContent}
          >
            {foodItems.map((item) => {
              const cartItem = cartItems.find(cartItem => cartItem.id_plat === item.id_plat);
              return (
                <GestureHandlerRootView key={item.id_plat}>
                   <Cart_item 
                  key={item.id_plat} 
                  item={item} 
                  onRemove={() => handleRemoveItem(item.id_plat)}
                  quantity={cartItem?.quantity || 1}
                />

                </GestureHandlerRootView>
               
              );
            })}
          </ScrollView>

          <View style={styles.summaryContainer}>
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total :</Text>
              <Text style={styles.totalValue}>{totalPrice.toFixed(2)} €</Text>
            </View>

            <View style={styles.inputRow}>
              <Text style={styles.inputLabel}>Table :</Text>
              <TextInput
                style={styles.tableInput}
                placeholder="Numéro"
                keyboardType="numeric"
                value={tableNumber}
                onChangeText={setTableNumber}
              />
            </View>

            <TouchableOpacity 
              style={styles.orderButton} 
              onPress={send_commandes}
              activeOpacity={0.8}
            >
              <Text style={styles.orderButtonText}>Valider la commande</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    paddingVertical: hp(3),
    paddingHorizontal: wp(5),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '700',
    fontSize: wp(8.5),
    lineHeight: hp(4),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(15),
  },
  emptyImage: {
    width: wp(40),
    height: wp(40),
    opacity: 0.5,
    marginBottom: hp(2),
  },
  emptyText: {
    fontSize: wp(4.5),
    color: '#888',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: wp(5),
    fontWeight: '600',
    color: '#333',
    marginLeft: wp(5),
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  itemsContainer: {
    flex: 1,
  },
  itemsContent: {
    paddingHorizontal: wp(4),
    paddingBottom: hp(2),
  },
  summaryContainer: {
    backgroundColor: '#fff',
    padding: wp(5),
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  totalLabel: {
    fontSize: wp(4.5),
    fontWeight: '600',
    color: '#333',
  },
  totalValue: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#003366',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  inputLabel: {
    fontSize: wp(4),
    fontWeight: '500',
    color: '#333',
    marginRight: wp(3),
  },
  tableInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: wp(2),
    padding: wp(3),
    fontSize: wp(4),
  },
  orderButton: {
    backgroundColor: '#FFC01D',
    borderRadius: wp(2),
    paddingVertical: hp(1.5),
    alignItems: 'center',
  },
  orderButtonText: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default MycartScreen;