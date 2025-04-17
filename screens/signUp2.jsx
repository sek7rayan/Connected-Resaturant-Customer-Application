import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignUp2 = () => {
  const [healthIssue, setHealthIssue] = useState('Health issues');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const healthIssues = [
    { id: '1', name: 'Diabetes' },
    { id: '2', name: 'diabetes' },
    { id: '3', name: 'diaets' },
    { id: '4', name: 'diabetes' },
    { id: '5', name: 'None' },
  ];

  const handleNext = () => {
    navigation.navigate('SignUp3');
  };

  const goBack = () => {
    navigation.goBack();
  };

  const selectHealthIssue = (issue) => {
    setHealthIssue(issue.name);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Header with back button and progress indicator */}
        <View style={styles.header}>
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Image source={require('../assets/fleche_gauche.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressFilled} />
            </View>
            <Text style={styles.stepText}>Step 2/3</Text>
          </View>
        </View>

        {/* Health issues section */}
        <View style={styles.healthContainer}>
          <View style={styles.healthHeader}>
            <Image source={require('../assets/health_issues.png')} style={styles.healthIcon} />
            <Text style={styles.healthTitle}>Health issues</Text>
          </View>
          <Text style={styles.healthSubtitle}>Do you have any of this health issues?</Text>
          
          {/* Dropdown selector */}
          <TouchableOpacity 
            style={styles.dropdown}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.dropdownText}>{healthIssue}</Text>
            <Image source={require('../assets/fleche_health_issues.png')} style={styles.dropdownIcon} />
          </TouchableOpacity>

          {/* Dropdown modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <FlatList
                  data={healthIssues}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <TouchableOpacity 
                      style={styles.modalItem}
                      onPress={() => selectHealthIssue(item)}
                    >
                      <Text style={styles.modalItemText}>{item.name}</Text>
                      {item.name === healthIssue && (
                        <Text style={styles.checkIcon}>✓</Text>
                      )}
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>

      {/* Bottom section with button and sign in */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signInLink}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, // Espace pour le bouton en bas
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
    width: '66%', // 2/3 filled for step 2
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  stepText: {
    color: '#4CAF50',
    marginTop: 5,
    fontSize: 12,
  },
  healthContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  healthHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  healthIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  healthTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  healthSubtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownIcon: {
    width: 10,
    height: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    maxHeight: '50%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
  },
  modalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  modalItemText: {
    fontSize: 16,
  },
  checkIcon: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#FFC01D',
    paddingVertical: 15,
    borderRadius: 20,
    width: '40%',
    alignItems: 'center',
    marginBottom: 10,
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
    fontSize: 14,
  },
});

export default SignUp2;