import { View } from "react-native";
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function Plat() {
    return (
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
    );
    }
StyleSheet.create({
    menuItem: {
   
        marginTop: hp(1),
        marginRight: wp(22),
        width: wp(30.22),
        backgroundColor: '#fff',
        borderRadius: wp(2.7),
        padding: wp(2.7),
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


