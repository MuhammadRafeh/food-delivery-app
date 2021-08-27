import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import OnBoarding from './src/screens/OnBoarding';
import AuthNavigator from './src/navigators/AuthNavigator';
import AppDrawer from './src/navigators/AppDrawer';
import { Provider, useSelector } from "react-redux";
import store from './src/redux/store';

function App() {
  const [isShowAuth, setIsShowAuth] = useState(false);
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <NavigationContainer>
      {
        !isAuth && (
          <>
            {!isShowAuth && <OnBoarding setIsShowAuth={setIsShowAuth} />}
            {isShowAuth && <AuthNavigator/>}
          </>
        )
      }
      {
        isAuth && (
          <AppDrawer/>
        )
      }
    </NavigationContainer>
  )
}

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  screen: {

  }
})
