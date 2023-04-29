import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'features/Home';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
