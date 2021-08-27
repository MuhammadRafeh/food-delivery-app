import * as React from 'react';
import { Button, View } from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import Profile from '../screens/Main/Profile';
import Orders from '../screens/Drawer/Orders';
import OfferPromo from '../screens/Drawer/OfferPromo';

import MainNavigator from './MainNavigator';
import theme from '../constants/theme';

import { Ionicons } from '@expo/vector-icons';

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label={`Sign-out`} onPress={() => {

                    }}
                activeTintColor={theme.primary}
                activeBackgroundColor={'white'}
                inactiveTintColor={'white'}
                icon={({ focused, size }) => {
                    return <Ionicons
                        name="arrow-forward-outline"
                        size={size}
                        color={focused ? '#7cc' : '#ccc'}
                    />
                }}
            />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
    return (
        <Drawer.Navigator
            useLegacyImplementation={true}
            initialRouteName="Main"
            screenOptions={{
                drawerActiveBackgroundColor: 'white',
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: theme.primary,
                drawerContentStyle: { justifyContent: 'space-between' },
                drawerStyle: { backgroundColor: theme.primary, width: '100%' },
                // drawerContentContainerStyle: {
                //     backgroundColor: 'green'
                // }


            }}

            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Main" component={MainNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name="Profile" component={Profile} options={{ drawerIcon: ({color, size, focused}) => <Ionicons size={size} name={'ios-man-outline'} /> }} />
            <Drawer.Screen name="orders" component={Orders} />
            <Drawer.Screen name="offer and promo" component={OfferPromo} />
        </Drawer.Navigator>
    );
}