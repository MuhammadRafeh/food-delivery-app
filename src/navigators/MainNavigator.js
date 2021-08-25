import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Main/Home'
import Profile from '../screens/Main/Profile'
import Favourites from '../screens/Main/Favourites'
import Recents from '../screens/Main/Recents'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    // screenOptions={{}}
    // screenOptions={{
    //   headerBackgroundContainerStyle: 
    // }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favourites} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Recents" component={Recents} />
    </Tab.Navigator>
  );
}

export default MyTabs;
