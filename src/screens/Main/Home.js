import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Home = props => {
    return (
        <View style={styles.screen}>
            <Text>
                Home
            </Text>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgb(242,242,242)'
    }
})
