import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OnBoarding from './src/screens/OnBoarding';
import AuthNavigator from './src/navigators/AuthNavigator';

export default function App() {
  const [isShowAuth, setIsShowAuth] = useState(false);
  return (
      <NavigationContainer>
        {!isShowAuth && <OnBoarding setIsShowAuth={setIsShowAuth} />}
        {isShowAuth && <AuthNavigator />}
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screen: {

  }
})
