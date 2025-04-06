import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

const DescriptionScreen = () => {
  const [incr, setincr] = useState(1);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header */}
        <View style={styles.header}>
         <View style={{marginTop:'-90%',flexDirection:'row',flex:1,justifyContent:'space-between' }} >
          <TouchableOpacity style={{marginLeft:'-60%'}}> 
           <Image source={require('../assets/fleche_gauche.png')}  />
          </TouchableOpacity>

          <TouchableOpacity style={{marginRight:'-60%'}} > 
           <Image source={require('../assets/coeur.png')} />
          </TouchableOpacity>
          </View>
        </View>

        {/* Image and Title */}
        <View style={styles.imageSection}>
          <Image 
            source={require('../assets/pizzaD.png')} 
            style={styles.foodImage} 
          />
          <Text style={styles.foodTitle}>Pizza peperoni</Text>

          <View style={styles.priceQuantityContainer}>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>350 da</Text>
            </View>
           
            <View style={styles.quantityContainer}>
              <TouchableOpacity 
                onPress={() => setincr(incr + 1)}
              >
                <Image source={require('../assets/plus.png')} style={styles.imagePM} />
              </TouchableOpacity>

              <Text style={styles.quantityText}>{incr}</Text>

              <TouchableOpacity 
                onPress={() => { if (incr > 1) setincr(incr - 1) }}
              >
                <Image source={require('../assets/moin.png')} style={styles.imagePM} />
              </TouchableOpacity>
            </View>
              
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

        {/* Reviews and Calories */}
        <View style={styles.section}>
          <View style={styles.reviewsContainer}>
          <View style={{flexDirection:'column'}}>
            <Text style={styles.sectionTitle}>Reviews</Text>
            <View style={styles.ratingText}>
                <Image source={require('../assets/star.png')} />
                <Text style={{color: '#FFC107', marginTop:-2}}>4.8</Text>
             </View>
             </View>
             <View style={{flexDirection:'column'}} >

            <Text style={styles.sectionTitle}>Calories</Text>
            <View style={styles.NEWText}>
                            <Image source={require('../assets/flash.png')} />
                            <Text style={{
                              color: '#FFD747',
                              marginTop: -1,
                              marginLeft: -2,
                              fontFamily: 'Poppins-Medium', 
                              fontWeight: '500', 
                              fontSize: 11.2,
                              lineHeight: 13, 
                              letterSpacing: 0,
                            }}>2000</Text>
                          </View>

            </View>
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Ingredients</Text>
          <View style={styles.ingredientsContainer}>
            <Text style={styles.ingredientItem}>Tomato sauce, </Text>
            <Text style={styles.ingredientItem}>Mozzarella cheese, </Text>
            <Text style={styles.ingredientItem}>Pepperoni, </Text>
            <Text style={styles.ingredientItem}>Oregano,</Text>
            <Text style={styles.ingredientItem}>Olive oil.</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Description</Text>
          <Text style={styles.descriptionText}>
            A timeless favorite, our Classic Margherita Pizza features a thin, crispy crust topped with rich tomato sauce, creamy mozzarella, and fresh basil.
          </Text>
        </View>
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
  content: {
    paddingBottom: 100, // Espace pour la barre de navigation
  },
  header: {
    borderBottomLeftRadius:'50%' ,
    borderBottomRightRadius:'50%',
    backgroundColor:'#B02522',
    padding: '29%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  backButton: {
    marginLeft: 10,
  },
  heartButton: {
    marginRight: 10,
  },
  imageSection: {
    alignItems: 'center',
    marginTop: -100, 
    marginBottom: 20,
  },
  foodImage: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
  },
  foodTitle: {
    fontFamily: 'SF-Pro-Display-Bold',
    fontWeight: '700',
    fontSize: 30,
    color: '#082953',
    marginTop: 10,
  },
  priceQuantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft:50
  
  },
  priceContainer: {
    borderRadius: 15,
    backgroundColor: '#F4F5F6',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 15,
  },
  priceText: {
    color: '#437F40',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 16,
  },
  quantityContainer: {
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#F4F5F6',
    paddingHorizontal: 15,
    paddingVertical: 8,
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: 10,
  },
  imagePM: {
    tintColor: 'black',
    width: 20,
    height: 20,
  },
  cartContainer: {
    marginLeft:55,
    backgroundColor: '#FFC01D',
    height: 51,
    width: 49,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cartIcon: {
    
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
 
  NEWText: {
    paddingLeft: 4,
    borderRadius: 10,
    backgroundColor: '#B02522',
    width: 44,
    height: 16,
    marginLeft: 9,
    alignItems: 'center',
    flexDirection: 'row',
    color: '#FFC107',
    fontSize: 12,
  },




  section: {
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  reviewsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sectionTitle:{
   color:'#9FA4AA',
   fontWeight:'700',
   fontSize:20

  },
  ratingText: {
    paddingLeft: 4,
    borderRadius: 10,
    backgroundColor: '#FFE9B2',
    width: 50,
    height: 20,
    marginLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    color: '#FFC107',
    fontSize: 12,
  },
  ingredientsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  ingredientItem: {
    fontSize: 16,
    color: '#9FA4AA',
    marginRight: 10,
    marginBottom: 5,
  },
  descriptionText: {
    color: '#9FA4AA',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22,
  },
  navBar: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#F4F5F6',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  navItemM: {
    backgroundColor: '#FFC01D',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  navIconM: {
    width: 40,
    height: 40,
  },
  navText: {
    color: '#555',
    fontSize: 12,
  },
});

export default DescriptionScreen;