import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Main/Home'
import Profile from '../screens/Main/Profile'
import Favourites from '../screens/Main/Favourites'
import Recents from '../screens/Main/Recents'
import { Ionicons, Feather } from '@expo/vector-icons';
import theme from '../constants/theme';
const Tab = createBottomTabNavigator();
<Ionicons name="ios-menu-sharp" size={32} color="green" />
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
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
        headerLeftContainerStyle: { paddingLeft: 30, borderBottomWidth: 0, elevation: 0 },
        headerRightContainerStyle: { paddingRight: 35, borderBottomWidth: 0 },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.secondary,
        headerStyle: { borderBottomWidth: 0, elevation: 0, backgroundColor: 'rgb(242,242,242)' },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ 
        tabBarIcon: (props) => <Ionicons name="home" size={props.size} color={props.color} /> ,
        headerLeft: () => <Image source={require('../../assets/icons/menu.png')} style={{ height: 19 }} resizeMode={'contain'} />,
        headerRight: () => <Feather name={'shopping-cart'} size={28} color={theme.secondary} />
        }} />
      <Tab.Screen name="Favorite" component={Favourites} options={{ tabBarIcon: (props) => <Ionicons name="heart" size={props.size} color={props.color} /> }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: (props) => <Ionicons name="person" size={props.size} color={props.color} /> }} />
      <Tab.Screen name="Recents" component={Recents} options={{ tabBarIcon: (props) => <Ionicons name="ios-timer" size={props.size} color={props.color} /> }} />
    </Tab.Navigator>
  );
}

export default MyTabs;
