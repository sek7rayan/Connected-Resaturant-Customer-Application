import React from 'react';
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

// Dimensions
const {width, height} = Dimensions.get('window');

// Fonctions hp et wp
const wp = (size) => (width / 100) * size;
const hp = (size) => (height / 100) * size;

const MyListScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My List</Text>
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
    fontSize: wp(4),
  },
  cartContainer: {
    marginRight: wp(-17.3),
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

export default MyListScreen;