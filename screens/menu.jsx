import React, {useState} from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  TextInput,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Api_plat from '../api_plats';
import Plat from '../composent/plat';
import { useEffect } from 'react';
const {width, height} = Dimensions.get('window');

import { CartContext } from '../CartContext';
import { useContext } from 'react';
const wp = (size) => (width / 100) * size;
const hp = (size) => (height / 100) * size;

const MenuScreen = () => {
<<<<<<< HEAD
  const [hoveredItem, setHoveredItem] = useState(null);
=======

  const { cartItems, setCartItems } = useContext(CartContext);

>>>>>>> 93d4f1b1dbeff7a3f9df32c93925cf9c972cef3d
  const navigation = useNavigation();
  const [plats, setPlats] = useState([]);

  console.log("cartItems ",cartItems);
useEffect(() => {

  const fetchAvailablePlats = async () => {
    try {
      const response = await Api_plat.getAvailablePlats();
      setPlats(response.data.plats);
    } catch (error) {
      console.error('Error fetching available plats:', error);
    }
  };

  fetchAvailablePlats();


}, []);





  
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
          />
          <View style={styles.cartContainer}>
            <TouchableOpacity>
              <Image 
                source={require('../assets/panier.png')} 
                style={styles.cartIcon}
              />
            </TouchableOpacity>
          </View> 
        </View>
      </View>

      {/* Category Filters */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButtonActive}>
          <Image 
            source={require('../assets/all.png')}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>All</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.categoryButton}>
          <Image 
            source={require('../assets/burger1.png')}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Burger</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.categoryButton}>
          <Image 
            source={require('../assets/pasta1.png')}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Pasta</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.categoryButton}>
          <Image 
            source={require('../assets/seafood.png')}
            style={styles.categoryImage}
          />
          <Text style={styles.categoryText}>Sea Food</Text>
        </TouchableOpacity>
      </ScrollView>

<<<<<<< HEAD
      {/* Sort Option */}
      <View style={styles.sortContainer}>
        <View style={styles.sortText}>
          <Text style={{marginRight: wp(1.3), fontWeight: 'bold', marginLeft: wp(0.5)}}>Prix</Text>
          <Image source={require('../assets/fleche_bas.png')} style={{marginTop: hp(0.6)}} />
        </View>
      </View>
=======
     
  <ScrollView style={styles.menuContainer}>
  <View style={styles.menuRow}>
    {plats.map((item) => (
      <Plat key={item.id_plat} item={item} setCartItems={setCartItems} />
    ))}
  </View>
  </ScrollView>
>>>>>>> 93d4f1b1dbeff7a3f9df32c93925cf9c972cef3d

      {/* Menu Items */}
      <ScrollView style={styles.menuContainer}>
        
        {/* First Row */}
        <View style={styles.menuRow}>
         <TouchableOpacity   
          activeOpacity={1}
          onPressIn={() => setHoveredItem('pizza')}
          onPressOut={() => setHoveredItem(null)}
          onPress={()=>navigation.navigate("Description")}
          style={{marginLeft:'-7%'}}
         >
          <View style={[ styles.menuItem, hoveredItem === 'pizza' && styles.menuItemHovered]}>
            <TouchableOpacity style={{marginRight: wp(-22.7)}}>
              <Image source={require('../assets/coeur.png')} />
            </TouchableOpacity>
            
             <Image 
              source={require('../assets/pizza.png')}
              style={styles.menuImage}
             />
            

            <View style={{flexDirection: 'row'}}>
              <View style={styles.NEWText}>
                <Image source={require('../assets/flash.png')} />
                <Text style={{
                  color: '#FFD747',
                  marginTop: hp(-0.12),
                  marginLeft: wp(-0.5),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: wp(3),
                  lineHeight: hp(1.6), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: hp(-0.25)}}>4.8</Text>
              </View>
            </View>

            <Text style={styles.itemName}>Pizza peperoni</Text>
            
            <View style={styles.itemRatingContainer}>
              <Text style={styles.itemPrice}>350 da</Text>
              
              <TouchableOpacity style={styles.plusButton}>
                <Image 
                  source={require('../assets/plus.png')} 
                  style={styles.plusIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
         </TouchableOpacity>

         <TouchableOpacity   
          activeOpacity={1}
          onPressIn={() => setHoveredItem('burger')}
          onPressOut={() => setHoveredItem(null)}
          style={{marginLeft:'-25%',marginRight:'20%'}}
         >
          <View style={[styles.menuItem, hoveredItem==='burger'&& styles.menuItemHovered ]}>
            <TouchableOpacity style={{marginRight: wp(-22.7)}}>
              <Image source={require('../assets/coeur.png')} />
            </TouchableOpacity>
            <Image 
              source={require('../assets/burger.png')}
              style={styles.menuImage}
            />
            
            <View style={{flexDirection: 'row'}}>
              <View style={styles.NEWText}>
                <Image source={require('../assets/flash.png')} />
                <Text style={{
                  color: '#FFD747',
                  marginTop: hp(-0.12),
                  marginLeft: wp(-0.5),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: wp(3),
                  lineHeight: hp(1.6), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: hp(-0.25)}}>4.8</Text>
              </View>
            </View>

            <Text style={styles.itemName}>Burger</Text>
            
            <View style={styles.itemRatingContainer}>
              <Text style={styles.itemPrice}>350 da</Text>
              
              <TouchableOpacity style={styles.plusButton}>
                <Image 
                  source={require('../assets/plus.png')} 
                  style={styles.plusIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity   
          activeOpacity={1}
          onPressIn={() => setHoveredItem('pasta')}
          onPressOut={() => setHoveredItem(null)}
          style={{marginLeft:'-45%',marginRight:'53%'}}
         >
          <View style={[styles.menuItem, hoveredItem==='pasta' && styles.menuItemHovered]}>
            <TouchableOpacity style={{marginRight: wp(-22.7)}}>
              <Image source={require('../assets/coeur.png')} />
            </TouchableOpacity>
            <Image 
              source={require('../assets/pasta.png')}
              style={styles.menuImage}
            />
             
            <View style={{flexDirection: 'row'}}>
              <View style={styles.NEWText}>
                <Image source={require('../assets/flash.png')} />
                <Text style={{
                  color: '#FFD747',
                  marginTop: hp(-0.12),
                  marginLeft: wp(-0.5),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: wp(3),
                  lineHeight: hp(1.6), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: hp(-0.25)}}>4.8</Text>
              </View>
            </View>

            <Text style={styles.itemName}>Pasta</Text>
            
            <View style={styles.itemRatingContainer}>
              <Text style={styles.itemPrice}>350 da</Text>
              
              <TouchableOpacity style={styles.plusButton}>
                <Image 
                  source={require('../assets/plus.png')} 
                  style={styles.plusIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
         </TouchableOpacity>
        </View>
        

        {/* Second Row */}
        <View style={styles.menuRow}>
        <TouchableOpacity   
          activeOpacity={1}
          onPressIn={() => setHoveredItem('salad')}
          onPressOut={() => setHoveredItem(null)}
          style={{marginLeft:'-7%'}}
         >
          <View style={[styles.menuItem, hoveredItem==='salad' && styles.menuItemHovered]}>
            <TouchableOpacity style={{marginRight: wp(-22.7)}}>
              <Image source={require('../assets/coeur.png')} />
            </TouchableOpacity>
            <Image 
              source={require('../assets/salad.png')}
              style={styles.menuImage}
            />
             
            <View style={{flexDirection: 'row'}}>
              <View style={styles.NEWText}>
                <Image source={require('../assets/flash.png')} />
                <Text style={{
                  color: '#FFD747',
                  marginTop: hp(-0.12),
                  marginLeft: wp(-0.5),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: wp(3),
                  lineHeight: hp(1.6), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: hp(-0.25)}}>4.8</Text>
              </View>
            </View>

            <Text style={styles.itemName}>Salad</Text>
            
            <View style={styles.itemRatingContainer}>
              <Text style={styles.itemPrice}>350 da</Text>
              
              <TouchableOpacity style={styles.plusButton}>
                <Image 
                  source={require('../assets/plus.png')} 
                  style={styles.plusIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity   
          activeOpacity={1}
          onPressIn={() => setHoveredItem('kimchi')}
          onPressOut={() => setHoveredItem(null)}
          style={{marginLeft:'-25%',marginRight:'20%'}}
         >
          <View style={[styles.menuItem, hoveredItem==='kimchi'&& styles.menuItemHovered]}>
            <TouchableOpacity style={{marginRight: wp(-22.7)}}>
              <Image source={require('../assets/coeur.png')} />
            </TouchableOpacity>
            <Image 
              source={require('../assets/kimchi.png')}
              style={styles.menuImage}
            />
             
            <View style={{flexDirection: 'row'}}>
              <View style={styles.NEWText}>
                <Image source={require('../assets/flash.png')} />
                <Text style={{
                  color: '#FFD747',
                  marginTop: hp(-0.12),
                  marginLeft: wp(-0.5),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: wp(3),
                  lineHeight: hp(1.6), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: hp(-0.25)}}>4.8</Text>
              </View>
            </View>

            <Text style={styles.itemName}>Kimchi</Text>
            
            <View style={styles.itemRatingContainer}>
              <Text style={styles.itemPrice}>350 da</Text>
             
              <TouchableOpacity style={styles.plusButton}>
                <Image 
                  source={require('../assets/plus.png')} 
                  style={styles.plusIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          </TouchableOpacity>

          <TouchableOpacity   
           activeOpacity={1}
           onPressIn={() => setHoveredItem('fries')}
           onPressOut={() => setHoveredItem(null)}
           style={{marginLeft:'-45%',marginRight:'53%'}}
          >
          <View style={[styles.menuItem, hoveredItem==='fries' && styles.menuItemHovered]}>
            <TouchableOpacity style={{marginRight: wp(-22.7)}}>
              <Image source={require('../assets/coeur.png')} />
            </TouchableOpacity>
            <Image 
              source={require('../assets/fries.png')}
              style={styles.menuImage}
            />
             
            <View style={{flexDirection: 'row'}}>
              <View style={styles.NEWText}>
                <Image source={require('../assets/flash.png')} />
                <Text style={{
                  color: '#FFD747',
                  marginTop: hp(-0.12),
                  marginLeft: wp(-0.5),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: wp(3),
                  lineHeight: hp(1.6), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: hp(-0.25)}}>4.8</Text>
              </View>
            </View>

            <Text style={styles.itemName}>Fries</Text>
            
            <View style={styles.itemRatingContainer}>
              <Text style={styles.itemPrice}>350 da</Text>
              
              <TouchableOpacity style={styles.plusButton}>
                <Image 
                  source={require('../assets/plus.png')} 
                  style={styles.plusIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Pagination */}
      <View style={styles.pagination}>
        <TouchableOpacity style={styles.pageButton}>
          <Text style={styles.pageText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pageNumberActive}>
          <Text style={styles.pageNumberTextActive}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pageNumber}>
          <Text style={styles.pageNumberText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pageNumber}>
          <Text style={styles.pageNumberText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pageNumber}>
          <Text style={styles.pageNumberText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pageButton}>
          <Text style={styles.pageText}>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/homeV.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/mylist.png')} style={styles.navIcon} />
          <Text style={styles.navText}>My List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemM}>
          <Image source={require('../assets/home.png')} style={styles.navIconM} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/orders.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/profile.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: hp(2.5),
    backgroundColor: '#fff',
  },
  headerText: {
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '700',
    fontSize: wp(8.5),
    lineHeight: hp(4),
    letterSpacing: 0,
  },
  searchContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: wp(2.7),
    width: wp(75),
  },
  searchInput: {
    flex: 1,
    color: '#555',
    paddingLeft: wp(6.7),
    fontSize: wp(4.3),
    
  },
  cartContainer: {
    marginRight: wp(-15),
    backgroundColor: '#FFC01D',
    height: hp(6.3),
    width: wp(13.1),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2.7),
  },
  cartIcon: {
    width: wp(6.7),
    height: hp(3.1),
    resizeMode: 'contain',
  },
  categoryContainer: {
    paddingHorizontal: wp(4),
    backgroundColor: '#fff',
  },
  categoryButton: {
    alignItems: 'center',
    marginRight: wp(5.3),
  },
  categoryButtonActive: {
    alignItems: 'center',
    marginRight: wp(5.3),
  },
  categoryImage: {
    width: wp(19.7),
    height: hp(10.1),
    borderRadius: wp(2.7),
    marginBottom: hp(0.6),
  },
  categoryText: {
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '700',
    fontSize: wp(4),
    lineHeight: hp(4),
    letterSpacing: 0,
  },
 
  menuContainer: {
    flex: 1,
    paddingHorizontal: wp(4), // Réduisez le padding horizontal
    backgroundColor: '#F4F5F6',
    borderRadius: wp(2.7),
    margin: wp(2.1),
    marginTop: -530
  },
  menuRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: hp(2),
    paddingHorizontal: wp(2), // Ajustez selon vos besoins
  },
  
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(1.8),
  },
  pageButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: wp(2.7),
    marginRight: wp(1.3),
    paddingHorizontal: wp(2.7),
  },
  pageNumber: {
    paddingHorizontal: wp(2.7),
  },
  pageNumberActive: {
    paddingHorizontal: wp(2.7),
    backgroundColor: '#9E090F',
    borderRadius: wp(13.3),
    paddingVertical: hp(0.5),
  },
  pageText: {
    color: '#fff',
    fontSize: wp(3.7),
  },
  pageNumberText: {
    color: '#555',
    fontSize: wp(3.7),
  },
  pageNumberTextActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: wp(3.7),
  },
  

});

export default MenuScreen;