import 'react-native-gesture-handler';
import React from 'react'; 
import { ButtonTabNavigators } from './src/navigations/ButtonTabNavigators';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <ButtonTabNavigators/>
    </NavigationContainer>
  );
}

