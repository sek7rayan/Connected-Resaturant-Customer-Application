import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Pressable,ScrollView } from 'react-native';


const SignUpScreen = () => {
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
   <ScrollView>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/foodie_logo.png')} style={styles.logo} />
        <Text style={styles.title}>Create an account</Text>
      </View>
      <TextInput placeholder="Last name" style={styles.input} />
      <TextInput placeholder="First name" style={styles.input} />
      <TextInput placeholder="Age" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="E-mail" style={styles.input} />
      <TextInput placeholder="Number" style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry onChangeText={setPassword} />
      {password.length > 0 && password.length < 8 && (
        <Text style={styles.errorText}>Password must be at least 8 characters long</Text>
      )}
      <TextInput placeholder="Confirm password" style={styles.input} secureTextEntry />
    
      <View style={styles.checkboxContainer}>
        <Pressable
          style={[styles.checkbox, isChecked && styles.checkedBox]}
          onPress={() => setIsChecked(!isChecked)}>
          {isChecked && <Text style={styles.checkmark}>✓</Text>}
        </Pressable>
        <Text style={styles.privacyText}>I Agree to <Text style={styles.pp}>Privacy Policy</Text></Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.signInText}>Already have an account? <Text style={styles.link_sign_in}>Sign in</Text></Text>
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 126,
    height: 217,
  },
  title: {
    fontFamily: 'SFProDisplay-Bold',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0,
    marginTop: -40, 
  },
  input: {
    width: 335,
    width:'100%',
    height:66,
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#D9D9D9',
    marginBottom: 15,
    paddingTop:-10,
    marginLeft: 30,
    marginRight:30,
  },
  errorText: {
    color: '#9E090F',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  checkboxContainer: {
    width:'54%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginRight:140,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#88DC83',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkedBox: {
    backgroundColor: '#88DC83',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
  },
  privacyText: {
    marginLeft: 0,
  },
  pp:{
    color:'#2F7B2B',
  },
  link_sign_in: {
    color: '#E2AE29',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFC01D',
    padding: 15,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'SFProDisplay-Bold', // Font family with weight 700 (Bold)
    fontWeight: '700', // Fallback if specific font not loaded
    fontSize: 18,
    lineHeight: 20, // 100% of font size (20 * 1.0)
    letterSpacing: 0, // 0%
    color:'#FFFFFF'
  },
  signInText: {
    color: 'black',
  },
});

export default SignUpScreen;