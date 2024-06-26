import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fc02-104-28-213-127.ngrok-free.app/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error('Error fetching data: ', error);
        Alert.alert('Error', 'Gagal mengambil data pengguna');
      });
  }, []);

  const handleLogin = () => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      navigation.navigate('Main', user.email);
    } else {
      Alert.alert('Login Gagal', 'Email atau Password salah');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo/digitopia.png')} style={styles.logo} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        keyboardType="email-address"
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <Button title="Log in" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: { marginBottom: 20 },
  logo: { width: 150, height: 150 }, // Adjust the size as needed
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  signUpText: { marginTop: 10, color: 'blue' },
  socialLoginText: { marginTop: 20 },
});
