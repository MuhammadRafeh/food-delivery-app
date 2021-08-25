import React from 'react';
import { View, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
        <View style={{flex: 1, marginTop: Constants.statusBarHeight}}>

            <Tab.Navigator 
                initialLayout={{ width: Dimensions.get('window').width }}
                screenOptions={{
                    tabBarIndicatorContainerStyle: {justifyContent: 'flex-end', alignItems: 'flex-end' },
                    tabBarLabelStyle: {fontWeight: 'bold', textTransform: 'none'},
                    tabBarStyle: {borderBottomLeftRadius: 20, borderBottomRightRadius: 20},
                    tabBarIndicatorStyle: {width: '35%', backgroundColor: 'rgb(250,74,12)'}
                }}
            >
                <Tab.Screen name="Login" component={Login}/>
                <Tab.Screen name="Sign-up" component={Signup} />
            </Tab.Navigator>
        </View>

    );
}

export default MyTabs;
