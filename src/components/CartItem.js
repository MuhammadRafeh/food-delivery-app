import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import theme from '../constants/theme';

const CartItem = () => {
    return (
        <View style={styles.item}>
            <View style={{ flex: 1 }}>

            </View>
            <View style={{ flex: 3, paddingRight: 10, paddingLeft: 5, justifyContent: 'center' }}>
                <View style={{marginBottom: 6}}>
                    <Text numberOfLines={1} style={{fontSize: 15.5, fontWeight: 'bold', letterSpacing: -1}}>
                        Veggie tomato mix asd asd a d a d asd a d s
                    </Text>
                </View>
                <View>
                    <Text style={{color: theme.primary, fontWeight: 'bold', letterSpacing: -0.9}}>
                        #1,900
                    </Text>
                </View>
                <View style={styles.counter}>
                    <Text style={{color: 'white',  paddingHorizontal: 8}}>
                        -
                    </Text>
                    <Text style={{color: 'white'}}>
                        1
                    </Text>
                    <Text style={{color: 'white',  paddingHorizontal: 8}}>
                        +
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default CartItem;

const styles = StyleSheet.create({
    item: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 15,
        height: 85
    },
    counter: {
        position: 'absolute',
        bottom: 12,
        right: 15,
        backgroundColor: theme.primary,
        height: 20,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
