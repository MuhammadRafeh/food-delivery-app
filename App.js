import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black,Inter_800ExtraBold } from '@expo-google-fonts/inter';
import Constants from 'expo-constants';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_800ExtraBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.screen}>
        <View style={styles.firstRow}>
          <View style={styles.circle}/>
          <View>
            <Text style={styles.text}>Food For</Text>
            <Text style={styles.text}>Everyone</Text>
          </View>
        </View>
        <View style={styles.lastRow}>
          <Button title="Get Started" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'space-between',
    marginTop: Constants.statusBarHeight, 
    backgroundColor: '#FF4B3A',
    padding: 42
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    marginBottom: 12
  },
  text: {
    fontSize: 50,
    fontFamily: 'Inter_800ExtraBold'
  },
  firstRow: {

  },
  lastRow: {

  }
})
