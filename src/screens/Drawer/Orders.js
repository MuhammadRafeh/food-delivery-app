import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Orders = props => {
    return (
        <View style={styles.screen}>
                <Text>
                    Orders
                </Text>
        </View>
    );
}

export default Orders;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    } 
});
