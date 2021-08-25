import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Signup = props => {
    return (
        <View style={styles.screen}>
            <Text>
                SignUp
            </Text>
        </View>
    );
}

export default Signup;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgb(242,242,242)'
    }
});

