import { View } from "react-native";
import { Text, StyleSheet, TouchableOpacity, Image , Dimensions} from 'react-native';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";




const {width, height} = Dimensions.get('window');
const wp = (size) => (width / 100) * size;
const hp = (size) => (height / 100) * size;




export default function Plat({item , setCartItems, showCartAlert , setShowAlert}) {
    const navigation = useNavigation();
    const [hoveredItem, setHoveredItem] = useState(null)
  
    return (
        <TouchableOpacity   
        activeOpacity={1}
        onPress={()=>{
          if ( hoveredItem === 'pizza') {
            setHoveredItem(null)
            setCartItems((prevItems) =>
              prevItems.filter((cartItem) => cartItem.id_plat !== item.id_plat)
            )
  
            
          }
          else {
            setHoveredItem('pizza');
            navigation.navigate("Description", {item : item});
            //
  
          }
         
        
      
      }}
        style={{marginBottom: hp(2)}}

       >
        <View style={[ styles.menuItem, hoveredItem === 'pizza' && styles.menuItemHovered]}>
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
              <Text style={{color: '#FFC107', marginTop: hp(-0.25)}}>{item.note_plat}</Text>
            </View>
          </View>

          <Text style={styles.itemName}>{item.nom_plat}</Text>
          
          <View style={styles.itemRatingContainer}>
            <Text style={styles.itemPrice}>{item.Prix_plat} DA</Text>
            
            <TouchableOpacity style={styles.plusButton} onPress={()=>{
                  if ( hoveredItem === 'pizza') {
                    setHoveredItem(null)
                    setCartItems((prevItems) =>
                      prevItems.filter((cartItem) => cartItem.id_plat !== item.id_plat)
                    )
          
                    
                  }
                  else {
                    setHoveredItem('pizza');
                    navigation.navigate("Description", {item : item});
                    //
          
                  }
                 
            
            
            }} >
              <Image 
                source={require('../assets/plus.png')} 
                style={styles.plusIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
       </TouchableOpacity>
    );
    }
const  styles =  StyleSheet.create({
    menuItem: {
        width: wp(40),
        marginBottom: hp(2),
        backgroundColor: '#fff',
        borderRadius: wp(2.7),
        padding: wp(3),
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
      },
     
      menuItemHovered: {
       borderColor: 'red',
       borderWidth: 3,
        borderRadius: wp(2.7),
      },
      menuImage: {
        width: '100%',
        height: hp(13),
        borderRadius: wp(2.1),
        marginBottom: hp(1.2),
        resizeMode: 'contain',
      },
      itemName: {
        color: '#082953',
        fontFamily: 'SF-Pro-Display-Bold', 
        fontWeight: '700', 
        fontSize: wp(3.7),
        lineHeight: hp(2.2), 
        letterSpacing: 0,
      },
      itemPrice: {
        fontFamily: 'Poppins-Medium', 
        fontWeight: '500', 
        fontSize: wp(3.5),
        lineHeight: hp(1.6), 
        letterSpacing: 0, 
        color: '#437F40'
      },
      itemRatingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: wp(1.3),
      },
      ratingText: {
        paddingLeft: wp(1.1),
        borderRadius: wp(2.7),
        backgroundColor: '#FFE9B2',
        width: wp(11.7),
        height: hp(2),
        marginLeft: wp(-29.3),
        alignItems: 'center',
        flexDirection: 'row',
        color: '#FFC107',
        fontSize: wp(3.2),
      },
      NEWText: {
        paddingLeft: wp(1.1),
        borderRadius: wp(2.7),
        backgroundColor: '#B02522',
        width: wp(11.7),
        height: hp(2),
        marginLeft: wp(2.4),
        alignItems: 'center',
        flexDirection: 'row',
        color: '#FFC107',
        fontSize: wp(3.2),
      },
      plusButton: {
        marginLeft: wp(2.7),
        backgroundColor: '#FFC107',
        borderRadius: wp(2.7),
        padding: wp(0.8),
        width: wp(8),
        height: hp(2.1),
        alignItems: 'center'
      },
      plusIcon: {
        width: wp(2.9),
        height: hp(1.4),
        tintColor: '#fff',
      },
    })

/*
{"Ajout_date": "2025-04-13T00:00:00.000Z",
 "Description_plat": "Salade avec poulet grillé",
 "Prix_plat": 9,
"categorie_plat": "salade",
"id_plat": 100,
"image_plat": "cesar.jpg",
"info_calorie": "450",
"nbrnote": "85",
"nom_plat": "Salade César",
"note_plat": 4.2}

*/
