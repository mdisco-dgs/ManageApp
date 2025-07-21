import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Loginscreen';
import DashboardScreen from '../screens/DashboardScreen';
import ClienteDetailScreen from '../screens/ClienteDetailScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Cliente" component={ClienteDetailScreen} />
      <Stack.Screen name="Messaggi" component={ChatScreen} />
    </Stack.Navigator>
  );
}
