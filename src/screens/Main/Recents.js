import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Recents = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Recents
            </Text>
        </View>
    );
}

export default Recents;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgb(242,242,242)'
    }
})
