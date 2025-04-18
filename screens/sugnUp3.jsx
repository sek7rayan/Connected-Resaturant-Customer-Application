import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp3 = () => {
  const [location, setLocation] = useState('');
  const [rememberLocation, setRememberLocation] = useState(false);
  const navigation = useNavigation();

  const handleConfirm = () => {
    // Handle confirmation and complete signup process
    // You can navigate to the main app or show a success message
    console.log('Signup completed with location:', location);
  };

  const goBack = () => {
    navigation.goBack();
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
            <Text style={styles.stepText}>Step 3/3</Text>
          </View>
        </View>

        {/* Location section */}
        <View style={styles.locationContainer}>
          <View style={styles.locationIconContainer}>
            <Image source={require('../assets/location.png')} style={styles.locationIcon} />
          </View>
          <Text style={styles.locationTitle}>Your location?</Text>
          
          {/* Location input */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Type your location"
              value={location}
              onChangeText={setLocation}
            />
            <TouchableOpacity style={styles.arrowButton}>
              <Image source={require('../assets/fleche_location.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>

          {/* Remember location checkbox */}
          <View style={styles.checkboxContainer}>
            <Pressable
              style={[styles.checkbox, rememberLocation && styles.checkedBox]}
              onPress={() => setRememberLocation(!rememberLocation)}>
              {rememberLocation && <Text style={styles.checkmark}>✓</Text>}
            </Pressable>
            <Text style={styles.rememberText}>Remember this location</Text>
          </View>
        </View>

        {/* Confirm button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleConfirm}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
          
          {/* Sign up link */}
          <Text style={styles.signUpText}>
            Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
          </Text>
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
    padding: 20,
    minHeight: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
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
    width: '100%', // 3/3 filled for step 3
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  stepText: {
    color: '#4CAF50',
    marginTop: 5,
    fontSize: 12,
  },
  locationContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  locationIconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  locationIcon: {
    width: 40,
    height: 40,
  },
  locationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  arrowButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
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
  rememberText: {
    fontSize: 14,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 'auto',
  },
  button: {
    backgroundColor: '#FFC01D',
    paddingVertical: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signUpText: {
    fontSize: 14,
  },
  signUpLink: {
    color: '#FFC01D',
    fontWeight: 'bold',
  },
});

export default SignUp3;