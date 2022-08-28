/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   Button,
   View,
 } from 'react-native';
 import HomeScreen from '../components/Navigation/Welcome';
 import ProfileScreen from '../components/Navigation/Profile';
 const Stack = createNativeStackNavigator();
 const Navigation =() => {
   return (
     <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
         name="Home"
         component={HomeScreen}
         options={{ title: 'Welcome' }}
       />
       <Stack.Screen name="Profile" component={ProfileScreen} />
     </Stack.Navigator>
   </NavigationContainer>
   );
 };
 
 
 export default Navigation;
 