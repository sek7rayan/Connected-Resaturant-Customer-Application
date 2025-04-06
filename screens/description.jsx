import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const DescriptionScreen = () => {
  const [incr,setincr] = useState(1);
  return (
    <View style={styles.container}>
      <ScrollView  contentContainerStyle={styles.content} >
        {/* Header */}
        <View style={styles.header}>
         <View style={{marginTop:'-90%',flexDirection:'row',flex:1,justifyContent:'space-between' }} >
          <TouchableOpacity style={{marginLeft:'-60%'}}> 
           <Image source={require('../assets/fleche_gauche.png')}  />
          </TouchableOpacity>

          <TouchableOpacity style={{marginRight:'-60%'}} > 
           <Image source={require('../assets/coeur.png')} />
          </TouchableOpacity>

          </ View>
           

        </View>

       
       

        {/* Reviews */}
        <View style={styles.section}>
          <View style={{marginLeft:'22%',marginTop:'-45%'}} >
          <Image source={require('../assets/pizzaD.png')} style={{width:'83%',height:'70%',marginLeft:'-2%'}} />
          <Text style={{ fontFamily:'SF-Pro-Display-Bold',fontWeight:'700',fontSize:30,color:'#082953',marginTop:'-11%'}} > Pizza peperoni </Text>

          <View style={{flexDirection:'row'}} >

          <View style={{borderRadius:15,backgroundColor:'#F4F5F6',width:'27%',marginLeft:'8%',marginTop:'3%'}} >
            <Text style={{marginLeft:'15%',marginTop:'8%',marginBottom:'6%',color:'#437F40',  fontFamily: 'Poppins-Medium',fontWeight: '500', fontSize: 16, lineHeight: 20,letterSpacing: 0, }} >350 da</Text>

          </View>
           
           <View style={{flexDirection:'row',borderRadius:15,backgroundColor:'#F4F5F6',width:'27%',marginLeft:'8%',marginTop:'3%'}} >
                 
                 <TouchableOpacity style={{flex:1,alignItems:'center',marginTop:'12%',marginLeft:'-10%'}} 
                  onPress={()=>setincr(incr + 1) }
                 
                 >
                   <Image source={require('../assets/plus.png')} style={styles.imagePM} />
                 </TouchableOpacity>

                 <Text style={{marginRight:'7%',marginTop:'5%'}} > {incr} </Text>

                 <TouchableOpacity style={{flex:1,alignItems:'center',marginTop:'12%',marginLeft:'-10%'}} 
                  onPress={  ()=> { if (incr > 0) {
                    setincr(incr - 1)
                  }   } }
                 
                 >
                   <Image source={require('../assets/moin.png')} style={styles.imagePM} />
                 </TouchableOpacity>


           </View>



          </View>



          
          </View>

          
      
          <View style={styles.reviewsContainer}>
          <Text style={styles.sectionTitle}>Reviews</Text>
            
            <Text style={styles.sectionTitle}>Calories</Text>
            
          </View>
        </View>

      

        {/* Ingredients */}
        <View style={styles.section}>
          <Text style={{fontSize: 18,fontWeight: 'bold',marginBottom: '3%'}}>Ingredients</Text>
          <View style={styles.ingredientsContainer}>
            <Text style={styles.ingredientItem}></Text>
            <Text style={styles.ingredientItem}></Text>
            <Text style={styles.ingredientItem}></Text>
            <Text style={styles.ingredientItem}></Text>
          </View>
        </View>

        
        

        {/* Description */}
        <View style={styles.section}>
          <Text style={{fontSize: 18,fontWeight: 'bold',marginBottom: '3%',}}>Description</Text>
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
    paddingBottom: '15%', 
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  imagePM:{
  tintColor:'black',
   width:'40%'
  },
  
  
  section: {
    padding: '5%',
  },
  sectionTitle: {
    marginLeft:'7%',
    flex:1,
    alignItems:'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '3%',
    color:'#9FA4AA'
  },
  reviewsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reviewItem: {
    fontSize: 14,
    color: '#555',
  },
  
  ingredientsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
  ingredientItem: {
    fontSize: 18,
  },
  descriptionText: {
    color: '#9FA4AA',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 15,
    letterSpacing: 0
   
  },
  navBar: {
    paddingTop:'2.5%',
    paddingBottom:'8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '6%',
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#F4F5F6',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
    
  },
  navIcon: {
    marginTop:'28%',
    width: '70%',
    height: '80%',
    marginBottom: '10%',
  },
  navItemM: {
    marginTop: '-15%',
    backgroundColor: '#FFC01D',
    borderRadius: '50%',
    alignItems: 'center',
    width: '25%',
    height: '270%',
  },
  navIconM: {
    marginTop: '20%',
    width: '46%',
    height: '48%',
  },
  navText: {
    
    color: '#555',
    fontSize: 12,
  },
});

export default DescriptionScreen;