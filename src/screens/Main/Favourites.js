import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Favourites = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Favourites
            </Text>
        </View>
    );
}

export default Favourites;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgb(242,242,242)'
    }
})
