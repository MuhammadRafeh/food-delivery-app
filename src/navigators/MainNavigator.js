import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Main/Home'
import Profile from '../screens/Main/Profile'
import Favourites from '../screens/Main/Favourites'
import Recents from '../screens/Main/Recents'
import { Ionicons } from '@expo/vector-icons';
import theme from '../constants/theme';
const Tab = createBottomTabNavigator();
 <Ionicons  name="ios-menu-sharp" size={32} color="green" /> 
function MyTabs() {
  return (
    <Tab.Navigator
      // screenOptions={{}}
      screenOptions={{
        headerStyle: { backgroundColor: 'rgb(242,242,242)' },
        tabBarStyle: {
          backgroundColor: 'rgb(242,242,242)',
          paddingBottom: 25,
          elevation: 0,
          borderTopWidth: 0,
          shadowOffset: {
            width: 0, height: 0 // for iOS
          },
          height: 70,
        },
        tabBarShowLabel: false,
        headerTitle: '',
        headerStatusBarHeight: 59,
        headerLeftContainerStyle: { paddingLeft: 20 },
        headerLeftContainerStyle: {borderBottomWidth: 0, elevation: 0},
        headerRightContainerStyle: {borderBottomWidth: 0, elevation: 0},
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.secondary,
        headerLeft: () => <Image source={require('../../assets/icons/menu.png')} style={{ height: 20 }} resizeMode={'contain'} />,
        
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon: (props) =>  <Ionicons  name="home" size={props.size} color={props.color} /> }} />
      <Tab.Screen name="Favorite" component={Favourites} options={{tabBarIcon: (props) =>  <Ionicons  name="heart" size={props.size} color={props.color} /> }}/>
      <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: (props) =>  <Ionicons  name="person" size={props.size} color={props.color} /> }}/>
      <Tab.Screen name="Recents" component={Recents} options={{tabBarIcon: (props) =>  <Ionicons  name="ios-timer" size={props.size} color={props.color} /> }}/>
    </Tab.Navigator>
  );
}

export default MyTabs;
