import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image,
  Dimensions,
  Button
} from 'react-native';
import Api_commande from '../api_commande';
import { useContext , useCallback , useEffect ,useState } from 'react';
import { CartContext } from '../CartContext';
import { useFocusEffect } from '@react-navigation/native';
import Api_plat from '../api_plats';
import Cart_item from '@/composent/cart_item';



const {width, height} = Dimensions.get('window');

const wp = (size) => (width / 100) * size;
const hp = (size) => (height / 100) * size;

const MycartScreen = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [foodItems, setFoodItems] = useState([]);

  useFocusEffect(
    useCallback(() => {
  
      const fetchData = async () => {
        try {

          const availablePlatsResponse = await Api_plat.getAvailablePlats();
          const availablePlats = availablePlatsResponse.data.plats;
          const merged = availablePlats.map((availablePlat) => {
            const isFavorite = cartItems.some((favoritePlat) => favoritePlat.id_plat === availablePlat.id_plat);
            if (isFavorite) {
              return availablePlat;
            }
          });
          const food = merged.filter((item) => item !== undefined);
          setFoodItems(food);
        } catch (error) {
          console.error("Erreur lors de la récupération des données :", error);
        }
      };
      fetchData();
    }, [cartItems])
  );

  

  const send_commandes = async () => {
    const commandeData = {
    id_client: 1,
    mode_payment: "cash",
    id_table: 3

    };

   

    const plats = cartItems;
 
    try {
      const response = await Api_commande.createCommande(commandeData, plats);
      console.log('Commande créée avec succès :', response);
    } catch (error) {
      console.error('Erreur lors de la création de la commande :', error);
    }
  }






 
  return (
    <View style={styles.container}>
      {/* Contenu principal (scrollable) */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
       
        <View style={styles.header}>
          <Text style={styles.headerText}>My cart</Text>
        </View>

        { cartItems.length === 0 ?
          <View style={styles.mainContent}>
          <View>
            <Image source={require('../assets/poubelle.png')} />
          </View>
          </View>

        : 
        <View>
          { foodItems.map((item) => {
                 
                 return (
                     <Cart_item key={item.id_plat} item={item} />
                 );
                       
             })}

        </View>
     
    

    } 
      
    
        

       
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: hp(10), // Espace pour la navbar
  },
  header: {
    padding: wp(5.3),
    backgroundColor: '#fff',
  },
  headerText: {
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '700',
    fontSize: wp(8.5),
    lineHeight: hp(4),
  },
  mainContent: {
    marginTop: hp(12.3),
    alignItems: 'center',
    flex: 1,
    padding: wp(5.3),
  },
  emptyCartTextY: {
    marginLeft: wp(20),
    color: '#616468',
    fontWeight: '700',
    fontSize: wp(4.5),
  },
  emptyCartText: {
    marginLeft: wp(10.9),
    color: '#616468',
    fontWeight: '700',
    fontSize: wp(4.5),
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: hp(1.8),
    borderTopWidth: wp(0.27),
    borderColor: '#eee',
    backgroundColor: '#F4F5F6',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: wp(6),
    height: hp(3),
    marginBottom: hp(0.6),
  },
  navItemM: {
    marginTop: hp(-4.5),
    backgroundColor: '#FFC01D',
    borderRadius: wp(50),
    alignItems: 'center',
    width: wp(22),
    height: hp(11.1)
  },
  navIconM: {
    marginTop: hp(2.5),
    width: wp(12.5),
    height: hp(5.8),
  },
  navText: {
    color: '#555',
    fontSize: wp(3.2),
  },
});

export default MycartScreen;