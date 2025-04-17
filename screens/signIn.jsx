import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Api_login_register from '../api_login_register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';


const {width, height} = Dimensions.get('window');


const wp = (size) => (width / 100) * size;
const hp = (size) => (height / 100) * size;

const SignINScreen = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function onchangeEmail(text) {
    setEmail(text);
  }
  function onchangePassword(text) {
    setPassword(text);
  }


  const handleLogin = async () => {
    try {
      const result = await Api_login_register.loginClient(email, password);
  
      if (result && result.token) {
        // Decode the token to get user information
        const decodedToken = jwtDecode(result.token);
        console.log("Token reçu :", decodedToken);
        await AsyncStorage.setItem('token', result.token);
        alert("Connexion réussie !");
      } else {
        alert("Erreur : Aucun token reçu.");
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };
  

//const token = await AsyncStorage.getItem('token');



  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/foodie_logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome back !</Text>
      </View>
     
      <TextInput placeholder="E-mail" style={styles.input} 
      onChangeText={onchangeEmail}
      />
      <TextInput 
        placeholder="Password" 
        style={styles.input} 
        secureTextEntry 
        onChangeText={onchangePassword} 
      />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
     <Text style={styles.buttonText}>Sign In</Text>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(5),
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: hp(2.5),
  },
  logo: {
    width: wp(33.6),  // ~126px sur 375px
    height: hp(26.7), // ~217px sur 812px
  },
  title: {
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '700',
    fontSize: wp(8.5),  // ~32px
    lineHeight: hp(4),  // ~32px
    letterSpacing: 0,
    marginTop: hp(-5),  // ~-40px
    marginBottom: hp(1.2), // ~10px
  },
  input: {
    width: wp(89.3),  // ~335px
    height: hp(8.1),  // ~66px
    paddingHorizontal: wp(5.3), // ~20px
    paddingBottom: hp(4.3), // ~35px
    borderRadius: wp(5.3), // ~20px
    backgroundColor: '#D9D9D9',
    marginBottom: hp(1.8), // ~15px
    paddingTop: hp(-1.2), // ~-10px
    marginLeft: wp(8),   // ~30px
    marginRight: wp(8),  // ~30px
  },
  button: {
    backgroundColor: '#FFC01D',
    padding: hp(1.8), // ~15px
    borderRadius: wp(5.3), // ~20px
    width: wp(40),    // 40% de la largeur
    alignItems: 'center',
    marginTop: hp(6.8), // ~55px
  },
  buttonText: {
    fontFamily: 'SFProDisplay-Bold', 
    fontWeight: '700', 
    fontSize: wp(4.8),  
    lineHeight: hp(2.5),
    letterSpacing: 0, 
    color: '#FFFFFF',
  },
});

export default SignINScreen;