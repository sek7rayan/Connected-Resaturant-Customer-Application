import React,{useState} from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image, 
  TextInput, 
  Dimensions,
  PixelRatio,
  Platform
} from 'react-native';

// Dimensions de référence (iPhone 11 Pro)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const { width, height } = Dimensions.get('window');

// Fonction de scaling horizontale
const scale = size => width / guidelineBaseWidth * size;

// Fonction de scaling verticale
const verticalScale = size => height / guidelineBaseHeight * size;

// Fonction de scaling modérée
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

// Fonction spéciale pour les polices
const fontScale = size => {
  const newSize = scale(size);
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

const MenuScreen = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
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

      {/* Sort Option */}
      <View style={styles.sortContainer}>
        <View style={styles.sortText}>
          <Text style={{marginRight: moderateScale(5), fontWeight: 'bold', marginLeft: moderateScale(2)}}>Prix</Text>
          <Image source={require('../assets/fleche_bas.png')} style={{marginTop: moderateScale(5)}} />
        </View>
      </View>

      {/* Menu Items */}
      <ScrollView style={styles.menuContainer}>
        
        {/* First Row */}
       
        <View style={styles.menuRow}>
         <TouchableOpacity   
          activeOpacity={1}
          onPressIn={() => setHoveredItem('pizza')}
          onPressOut={() => setHoveredItem(null)}
          style={{marginLeft:'-7%'}}
         >
          
          <View style={[ styles.menuItem, hoveredItem === 'pizza' && styles.menuItemHovered]}>
            <TouchableOpacity style={{marginRight: moderateScale(-85)}}>
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
                  marginTop: moderateScale(-1),
                  marginLeft: moderateScale(-2),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: fontScale(11.2),
                  lineHeight: verticalScale(13), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: moderateScale(-2)}}>4.8</Text>
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
            <TouchableOpacity style={{marginRight: moderateScale(-85)}}>
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
                  marginTop: moderateScale(-1),
                  marginLeft: moderateScale(-2),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: fontScale(11.2),
                  lineHeight: verticalScale(13), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: moderateScale(-2)}}>4.8</Text>
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
            <TouchableOpacity style={{marginRight: moderateScale(-85)}}>
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
                  marginTop: moderateScale(-1),
                  marginLeft: moderateScale(-2),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: fontScale(11.2),
                  lineHeight: verticalScale(13), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: moderateScale(-2)}}>4.8</Text>
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
            <TouchableOpacity style={{marginRight: moderateScale(-85)}}>
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
                  marginTop: moderateScale(-1),
                  marginLeft: moderateScale(-2),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: fontScale(11.2),
                  lineHeight: verticalScale(13), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: moderateScale(-2)}}>4.8</Text>
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
            <TouchableOpacity style={{marginRight: moderateScale(-85)}}>
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
                  marginTop: moderateScale(-1),
                  marginLeft: moderateScale(-2),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: fontScale(11.2),
                  lineHeight: verticalScale(13), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: moderateScale(-2)}}>4.8</Text>
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
            <TouchableOpacity style={{marginRight: moderateScale(-85)}}>
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
                  marginTop: moderateScale(-1),
                  marginLeft: moderateScale(-2),
                  fontFamily: 'Poppins-Medium', 
                  fontWeight: '500', 
                  fontSize: fontScale(11.2),
                  lineHeight: verticalScale(13), 
                  letterSpacing: 0,
                }}>NEW</Text>
              </View>

              <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop: moderateScale(-2)}}>4.8</Text>
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
    padding: verticalScale(20),
    backgroundColor: '#fff',
  },
  headerText: {
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '700',
    fontSize: fontScale(32),
    lineHeight: verticalScale(32),
    letterSpacing: 0,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: moderateScale(10),
    width: '85%',
  },
  searchInput: {
    flex: 1,
    color: '#555',
    paddingLeft: moderateScale(25),
    fontSize: fontScale(16),
  },
  cartContainer: {
    marginRight: moderateScale(-65),
    backgroundColor: '#FFC01D',
    height: verticalScale(51),
    width: moderateScale(49),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  cartIcon: {
    width: moderateScale(25),
    height: verticalScale(25),
    resizeMode: 'contain',
  },
  categoryContainer: {
    paddingHorizontal: moderateScale(25),
    backgroundColor: '#fff',
  },
  categoryButton: {
    alignItems: 'center',
    marginRight: moderateScale(20),
  },
  categoryButtonActive: {
    alignItems: 'center',
    marginRight: moderateScale(20),
  },
  categoryImage: {
    width: moderateScale(74),
    height: verticalScale(82),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(5),
  },
  categoryText: {
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '700',
    fontSize: fontScale(15),
    lineHeight: verticalScale(32),
    letterSpacing: 0,
  },
  sortContainer: {
    padding: moderateScale(20),
    marginTop: verticalScale(-390),
    marginLeft: moderateScale(15)
  },
  sortText: {
    flexDirection: 'row',
    paddingLeft: moderateScale(10),
    width: moderateScale(60),
    color: '#020E1D',
    backgroundColor: '#FFE196',
    borderRadius: moderateScale(10),
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: moderateScale(38),
    backgroundColor: '#F4F5F6',
    borderRadius:10,
    margin: moderateScale(8),
    
  },
  menuRow: {
    flexDirection: 'row',
    marginLeft:-10,
    marginBottom: verticalScale(15),
  },
  menuItem: {
    marginTop: verticalScale(8),
    marginRight: moderateScale(10),
    width: '60%',
    backgroundColor: '#fff',
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 20, 
  },
  menuItemHovered: {
    backgroundColor: '#B02522',

    
  },
  
  menuImage: {
    width: '100%',
    height: verticalScale(100),
    borderRadius: moderateScale(8),
    marginBottom: verticalScale(10),
    resizeMode: 'contain',
  },
  itemName: {
    color: '#082953',
    fontFamily: 'SF-Pro-Display-Bold', 
    fontWeight: '700', 
    fontSize: fontScale(14),
    lineHeight: verticalScale(18), 
    letterSpacing: 0,
  },
  itemPrice: {
    fontFamily: 'Poppins-Medium', 
    fontWeight: '500', 
    fontSize: fontScale(13),
    lineHeight: verticalScale(13), 
    letterSpacing: 0, 
    color: '#437F40'
  },
  itemRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: moderateScale(5),
  },
  ratingText: {
    paddingLeft: moderateScale(4),
    borderRadius: moderateScale(10),
    backgroundColor: '#FFE9B2',
    width: moderateScale(44),
    height: verticalScale(16),
    marginLeft: moderateScale(-110),
    alignItems: 'center',
    flexDirection: 'row',
    color: '#FFC107',
    fontSize: fontScale(12),
  },
  NEWText: {
    paddingLeft: moderateScale(4),
    borderRadius: moderateScale(10),
    backgroundColor: '#B02522',
    width: moderateScale(44),
    height: verticalScale(16),
    marginLeft: moderateScale(9),
    alignItems: 'center',
    flexDirection: 'row',
    color: '#FFC107',
    fontSize: fontScale(12),
  },
  plusButton: {
    marginLeft: moderateScale(10),
    backgroundColor: '#FFC107',
    borderRadius: moderateScale(10),
    padding: moderateScale(3),
    width: moderateScale(30),
    height: verticalScale(17),
    alignItems: 'center'
  },
  plusIcon: {
    width: moderateScale(11),
    height: verticalScale(11),
    tintColor: '#fff',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: verticalScale(15),
  },
  pageButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: moderateScale(10),
    marginRight: moderateScale(5),
    paddingHorizontal: moderateScale(10),
  },
  pageNumber: {
    paddingHorizontal: moderateScale(10),
  },
  pageNumberActive: {
    paddingHorizontal: moderateScale(10),
    backgroundColor: '#9E090F',
    borderRadius: moderateScale(50),
    paddingVertical: verticalScale(4),
  },
  pageText: {
    color: '#fff',
    fontSize: fontScale(14),
  },
  pageNumberText: {
    color: '#555',
    fontSize: fontScale(14),
  },
  pageNumberTextActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: fontScale(14),
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: verticalScale(15),
    borderTopWidth: moderateScale(1),
    borderColor: '#eee',
    backgroundColor: '#F4F5F6',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: moderateScale(24),
    height: verticalScale(24),
    marginBottom: verticalScale(5),
  },
  navItemM: {
    marginTop: verticalScale(-35),
    backgroundColor: '#FFC01D',
    borderRadius: moderateScale(50),
    alignItems: 'center',
    width: moderateScale(90),
    height: verticalScale(90)
  },
  navIconM: {
    marginTop: verticalScale(20),
    width: moderateScale(47),
    height: verticalScale(47),
  },
  navText: {
    color: '#555',
    fontSize: fontScale(12),
  },
});

export default MenuScreen;