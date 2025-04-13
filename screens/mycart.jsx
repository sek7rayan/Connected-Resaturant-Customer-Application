import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView, 
  Image,
  Dimensions
} from 'react-native';

// Dimensions
const {width, height} = Dimensions.get('window');

// Fonctions hp et wp
const wp = (size) => (width / 100) * size;
const hp = (size) => (height / 100) * size;

const MycartScreen = () => {
  return (
    <View style={styles.container}>
      {/* Contenu principal (scrollable) */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>My cart</Text>
        </View>

        <View style={styles.mainContent}>
          <View>
            <Image source={require('../assets/poubelle.png')} />
          </View>

          <View style={{flexDirection:'column'}}>
            <Text style={styles.emptyCartTextY}>Your cart is Empty!</Text>
            <Text style={styles.emptyCartText}>Add items to cart to get started</Text>
          </View>
        </View>
      </ScrollView>

      {/* Navigation Bar (toujours en bas) */}
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