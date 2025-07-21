import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Platform, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import { StatusBar } from 'expo-status-bar';

// Ignora warning inutili
LogBox.ignoreLogs(['Setting a timer']);

// Abilita/disabilita screens a seconda della piattaforma
if (Platform.OS !== 'web') {
  enableScreens(); // iOS e Android
} else {
  enableScreens(false); // Web
}

// Componente principale
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppNavigator />
    </NavigationContainer>
  );
}
