import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen  name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}