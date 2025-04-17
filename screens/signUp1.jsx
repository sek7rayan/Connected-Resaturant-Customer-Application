import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp1 = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  
  const navigation = useNavigation();

  const handleNext = () => {
    // Validation logic can be added here
    navigation.navigate('SignUp2');
  };

  const goBack = () => {
    navigation.goBack();
  };

  const handleSignIn = () => {
    // Le bouton est cliquable mais ne fait aucune navigation
    console.log('Sign in pressed');
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Header with back button and progress indicator */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Image source={require('../assets/fleche_gauche.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFilled} />
            </View>
            <Text style={styles.stepText}>Step 1/3</Text>
          </View>
        </View>

        {/* Avatar and title */}
        <View style={styles.avatarContainer}>
          <Image source={require('../assets/foodie_logo.png')} style={styles.avatar} />
          <Text style={styles.title}>Create an account</Text>
        </View>

        {/* Form inputs */}
        <TextInput 
          placeholder="Name" 
          style={styles.input} 
          value={name}
          onChangeText={setName}
        />
        
        <TextInput 
          placeholder="Surname" 
          style={styles.input} 
          value={surname}
          onChangeText={setSurname}
        />
        
        <TextInput 
          placeholder="Email" 
          style={styles.input} 
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        
        <TextInput 
          placeholder="Age" 
          style={styles.input} 
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        
        <TextInput 
          placeholder="Password" 
          style={styles.input} 
          secureTextEntry 
          value={password}
          onChangeText={setPassword}
        />
        
        {password.length > 0 && password.length < 8 && (
          <Text style={styles.errorText}>Password must be at least 8 characters long</Text>
        )}
        
        <TextInput 
          placeholder="Confirm password" 
          style={styles.input} 
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      
        {/* Privacy policy checkbox */}
        <View style={styles.checkboxContainer}>
          <Pressable
            style={[styles.checkbox, isChecked && styles.checkedBox]}
            onPress={() => setIsChecked(!isChecked)}>
            {isChecked && <Text style={styles.checkmark}>✓</Text>}
          </Pressable>
          <Text style={styles.privacyText}>
            I Agree to <Text style={styles.privacyLink}>Privacy Policy</Text>
          </Text>
        </View>

        {/* Next button */}
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

        {/* Sign in link */}
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signInLink}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  progressContainer: {
    flex: 1,
    alignItems: 'center',
  },
  progressBar: {
    width: '80%',
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
  },
  progressFilled: {
    width: '33%',
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  stepText: {
    color: '#4CAF50',
    marginTop: 5,
    fontSize: 12,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginLeft: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkedBox: {
    backgroundColor: '#4CAF50',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
  },
  privacyText: {
    fontSize: 14,
  },
  privacyLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFC01D',
    paddingVertical: 15,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: {
    fontSize: 14,
  },
  signInLink: {
    color: '#FFC01D',
    fontWeight: 'bold',
  },
});

export default SignUp1;