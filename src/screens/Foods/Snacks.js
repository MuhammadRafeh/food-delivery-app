import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Snacks = props => {
    return (
        <View>
            <Text>Snacks</Text>
        </View>
    );
}

export default Snacks;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    }
});
