import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import Api_login_register from '../api_login_register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const wp = (size) => (width / 100) * size;
const hp = (size) => (height / 100) * size;

const SignINScreen = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

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
        const decodedToken = jwtDecode(result.token);
        console.log("Token reçu :", decodedToken);
        await AsyncStorage.setItem('token', result.token);
        navigation.navigate('Main');
      } else {
        alert("Erreur : Aucun token reçu.");
      }
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp1'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/foodie_logo.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome back !</Text>
      </View>
     
      <TextInput 
        placeholder="E-mail" 
        style={styles.input} 
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

      {/* Ajout du texte pour naviguer vers SignUp */}
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
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
    width: wp(33.6),
    height: hp(26.7),
  },
  title: {
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '700',
    fontSize: wp(8.5),
    lineHeight: hp(4),
    letterSpacing: 0,
    marginTop: hp(-5),
    marginBottom: hp(1.2),
  },
  input: {
    width: wp(89.3),
    height: hp(8.1),
    paddingHorizontal: wp(5.3),
    paddingBottom: hp(4.3),
    borderRadius: wp(5.3),
    backgroundColor: '#D9D9D9',
    marginBottom: hp(1.8),
    paddingTop: hp(-1.2),
    marginLeft: wp(8),
    marginRight: wp(8),
  },
  button: {
    backgroundColor: '#FFC01D',
    padding: hp(1.8),
    borderRadius: wp(5.3),
    width: wp(40),
    alignItems: 'center',
    marginTop: hp(6.8),
  },
  buttonText: {
    fontFamily: 'SFProDisplay-Bold', 
    fontWeight: '700', 
    fontSize: wp(4.8),  
    lineHeight: hp(2.5),
    letterSpacing: 0, 
    color: '#FFFFFF',
  },
  // Nouveaux styles pour le texte d'inscription
  signUpContainer: {
    flexDirection: 'row',
    marginTop: hp(2),
    alignItems: 'center',
  },
  signUpText: {
    fontSize: wp(4),
    color: '#666666',
  },
  signUpLink: {
    fontSize: wp(4),
    color: '#FFC01D',
    fontWeight: 'bold',
  },
});

export default SignINScreen;