import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const OfferPromo = props => {
    return (
        <View style={styles.screen}>
                <Text>
                    OfferPromo
                </Text>
        </View>
    );
}

export default OfferPromo;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    } 
});
