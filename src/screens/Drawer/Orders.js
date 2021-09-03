import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CartItem from '../../components/CartItem';

const Orders = props => {
    return (
        <View style={styles.screen}>
                <Text>
                    Orders
                </Text>
                <CartItem/>
        </View>
    );
}

export default Orders;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgb(245,245,248)',
        paddingHorizontal: 36,
        height: '100%'
    }
});
