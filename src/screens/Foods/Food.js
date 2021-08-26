import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const Food = props => {
    return (
        <View style={styles.screen}>
            <View>
                <Text>Food</Text>
            </View>
            <ScrollView horizontal>
                
            </ScrollView>
        </View>
    );
}

export default Food;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
        justifyContent: 'space-around'
    }
});
