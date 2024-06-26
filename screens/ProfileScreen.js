import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
  const { email } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Geek Forum For You</Text>
      <View style={styles.profileContainer}>
        <Image 
          source={require('../assets/forum/profile/picture.png')} 
          style={styles.profileImage} 
        />
        <Text style={styles.profileName}>{email}</Text>
      </View>
      <Button title="Back to Home" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f8f9fa' 
  },
  header: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#343a40', 
    marginBottom: 20 
  },
  profileContainer: { 
    alignItems: 'center', 
    marginBottom: 40 
  },
  profileImage: {
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginBottom: 20,
  },
  profileName: { 
    fontSize: 22, 
    fontWeight: '600', 
    color: '#495057', 
    marginBottom: 5 
  },
  email: { 
    fontSize: 16, 
    color: '#6c757d' 
  },
});
