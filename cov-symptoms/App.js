import React from 'react';
import Navigation from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
import Home from './components/Home';
import Stats from './components/Stats';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Stats" component={Stats} />
      </Stack.Navigator>
    </NavigationContainer>

      
  );
}

