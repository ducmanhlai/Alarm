
import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './Features/Navigation';

const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  return (
   <Navigation></Navigation>
  );
};


export default App;
