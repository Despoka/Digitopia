import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import HomeScreen from './screens/HomeScreen';
import ForumScreen from './screens/ForumScreen';
import Forum2Screen from './screens/Forum2Screen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ForumNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Forum" component={ForumScreen} />
      <Stack.Screen name="Youtube" component={Forum2Screen} />
    </Stack.Navigator>
  );
}

function MainNavigator({ route }) {
  const email  = route.params || {};
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} initialParams={{email}} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />) }} />
      <Tab.Screen name="Forum" component={ForumNavigator} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="list" color={color} size={size} />) }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="search" color={color} size={size} />) }} />
      <Tab.Screen name="Profile" initialParams={{email}} component={ProfileScreen} options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="person" color={color} size={size} />) }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} /> 
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
