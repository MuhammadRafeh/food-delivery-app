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
        // headerLeft: () => <

      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorite" component={Favourites} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Recents" component={Recents} />
    </Tab.Navigator>
  );
}

export default MyTabs;
