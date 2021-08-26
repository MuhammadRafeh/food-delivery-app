import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Drinks = props => {
    return (
        <View style={styles.screen}>
            <Text>Drinks</Text>
        </View>
    );
}

export default Drinks;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
    }
});
