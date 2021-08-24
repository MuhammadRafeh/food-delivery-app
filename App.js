import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import onBoarding from './src/screens/OnBoarding';

export default function App() {
  return (
    <NavigationContainer>
      <onBoarding />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
})
