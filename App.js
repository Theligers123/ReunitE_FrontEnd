import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, 
  TouchableOpacity, SafeAreaView, 
  Button, Platform, Alert} from 'react-native';
import WelcomeScreen from './app/assets/screens/WelcomeScreen';

export default function App() {
  return (
    <WelcomeScreen/>
  );
}

