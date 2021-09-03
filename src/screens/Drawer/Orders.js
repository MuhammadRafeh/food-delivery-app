import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Button from '../../components/Button';
import CartItem from '../../components/CartItem';
import theme from '../../constants/theme';

const Orders = props => {
    return (
        <View style={styles.screen}>
            <View style={{marginBottom: '3%', marginTop: '4%', paddingHorizontal: 36}}>
                <Text style={{textAlign: 'center', letterSpacing: -0.9, color: '#000000', fontSize: 12}}>
                    swipe on an item for actions
                </Text>
            </View>
            <View style={{height: '80%'}}>
                <ScrollView contentContainerStyle={{paddingHorizontal: 36}}>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                </ScrollView>
            </View>

            <Button style={styles.button} label={'Complete order'}/>
        </View>
    );
}

export default Orders;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: theme.background,
        height: '100%'
    },
    button: {
        height: '9%',
        marginTop: '7%',
        marginHorizontal: 36
    }
});
