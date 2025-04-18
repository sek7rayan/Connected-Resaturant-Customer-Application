import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Modal, FlatList, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Api_maladie from '../api_maladie';

const SignUp2 = () => {
    const { params } = useRoute();
    const [selectedMaladies, setSelectedMaladies] = useState([]);
    const [maladies, setMaladies] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchMaladies = async () => {
            try {
                const maladie = await Api_maladie.getMaladies();
                setMaladies(maladie.data.maladies);
            } catch (error) {
                Alert.alert('Erreur', error.message);
            }
        };
        fetchMaladies();
    }, []);

    const toggleMaladie = (maladie) => {
        setSelectedMaladies(prev => 
            prev.some(m => m.id_maladie === maladie.id_maladie) 
                ? prev.filter(m => m.id_maladie !== maladie.id_maladie) 
                : [...prev, maladie]
        );
    };

    const handleNext = () => {
        navigation.navigate('SignUp3', { 
            formData: params.formData,
            maladies: selectedMaladies.map(m => m.id_maladie)
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Header and progress bar */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Image source={require('../assets/fleche_gauche.png')} style={styles.backIcon} />
                    </TouchableOpacity>
                    <View style={styles.progressContainer}>
                        <View style={styles.progressBar}>
                            <View style={[styles.progressFilled, { width: '66%' }]} />
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
                    <Text style={styles.healthSubtitle}>Select your health issues:</Text>
                    
                    {/* Selected maladies */}
                    {selectedMaladies.length > 0 && (
                        <View style={styles.selectedContainer}>
                            {selectedMaladies.map(maladie => (
                                <View key={maladie.id_maladie} style={styles.selectedItem}>
                                    <Text style={styles.selectedText}>{maladie.nom_maladie}</Text>
                                    <TouchableOpacity onPress={() => toggleMaladie(maladie)}>
                                        <Text style={styles.removeText}>×</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    )}

                    {/* Dropdown to add more maladies */}
                    <TouchableOpacity 
                        style={styles.dropdown}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.dropdownText}>
                            {selectedMaladies.length > 0 ? 'Add more health issues' : 'Select health issues'}
                        </Text>
                        <Image source={require('../assets/fleche_health_issues.png')} style={styles.dropdownIcon} />
                    </TouchableOpacity>

                    {/* Modal for selecting maladies */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <FlatList
                                    data={maladies}
                                    keyExtractor={(item) => item.id_maladie.toString()}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity 
                                            style={styles.modalItem}
                                            onPress={() => {
                                                toggleMaladie(item);
                                                setModalVisible(false);
                                            }}
                                        >
                                            <Text style={styles.modalItemText}>{item.nom_maladie}</Text>
                                            {selectedMaladies.some(m => m.id_maladie === item.id_maladie) && (
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

            {/* Next button */}
            <View style={styles.bottomContainer}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleNext}
                    disabled={selectedMaladies.length === 0}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        padding: 20,
        paddingBottom: 100,
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
    selectedContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
    },
    selectedItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E3F2FD',
        padding: 8,
        borderRadius: 15,
        marginRight: 8,
        marginBottom: 8,
    },
    selectedText: {
        marginRight: 5,
    },
    removeText: {
        color: 'red',
        fontWeight: 'bold',
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
    buttonDisabled: {
        backgroundColor: '#CCCCCC',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default SignUp2;