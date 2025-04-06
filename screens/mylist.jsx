import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';

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
      padding: 20,
      backgroundColor: '#fff',
    },
    headerText: {
      fontFamily: 'SFProDisplay-Bold',
      fontWeight: '700',
      fontSize: 32,
      lineHeight: 32,
      letterSpacing: 0,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#eee',
      borderRadius: 10,
      width: '85%',
    },
    searchInput: {
      flex: 1,
      color: '#555',
      paddingLeft: 25,
    },
    cartContainer: {
      marginRight: -65,
      backgroundColor: '#FFC01D',
      height: 51,
      width: 49,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    cartIcon: {
      width: 25,
      height: 25,
      resizeMode: 'contain',
    },
    categoryContainer: {
      paddingHorizontal: 25,
      backgroundColor: '#fff',
    },
    categoryButton: {
      alignItems: 'center',
      marginRight: 20,
    },
    categoryButtonActive: {
      alignItems: 'center',
      marginRight: 20,
    },
    categoryImage: {
      width: 74,
      height: 82,
      borderRadius: 10,
      marginBottom: 5,
    },
    categoryText: {
      fontFamily: 'SFProDisplay-Bold',
      fontWeight: '700',
      fontSize: 15,
      lineHeight: 32,
      letterSpacing: 0,
    },
    sortContainer: {
      padding: 20,
      marginTop: -390,
      marginLeft: 15
    },
    
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 15,
      borderTopWidth: 1,
      borderColor: '#eee',
      backgroundColor: '#F4F5F6',
    },
    navItem: {
      alignItems: 'center',
    },
    navIcon: {
      width: 24,
      height: 24,
      marginBottom: 5,
    },
    navItemM:{
      marginTop:-35,
      backgroundColor:'#FFC01D',
      borderRadius:'50%',
      alignItems:'center',
      width:90,
      height:90
    },
    navIconM:{
      marginTop:20,
      width:47,
      height:47,
      
    },
    navText: {
      color: '#555',
      fontSize: 12,
    },
  });




export default MyListScreen;