import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OnBoarding from './src/screens/OnBoarding';

export default function App() {
  return (
    <NavigationContainer>
      <OnBoarding />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screen: {

  }
})
