import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const Home = props => {
    return (
        <View style={styles.screen}>
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={styles.label} adjustsFontSizeToFit={true} numberOfLines={1}>
                        Delicious
                    </Text>
                    <Text style={styles.label}  adjustsFontSizeToFit={true} numberOfLines={1}>
                        food for you
                    </Text>
                </View>
                <View>
                    <TextInput
                        style={{}}
                    />
                </View>
            </View>
            <View style={{ flex: 2 }}>

            </View>

        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgb(242,242,242)',
        marginLeft: 41,
        paddingTop: 20
    },
    label: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})
