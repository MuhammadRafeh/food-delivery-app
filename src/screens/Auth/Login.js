import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const Login = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.firstRow}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.inputLableColor}>
                        Email address
                    </Text>
                    <TextInput onChangeText={(val) => { }} style={{ width: '100%', borderBottomColor: 'rgb(121,121,121)', borderBottomWidth: 1 }} />
                </View>
                <View style={{ flex: 2.3 }}>
                    <Text style={styles.inputLableColor}>
                        Password
                    </Text>
                    <TextInput onChangeText={(val) => { }} style={{ width: '100%', borderBottomColor: 'rgb(121,121,121)', borderBottomWidth: 1 }} />
                    <View style={{marginTop: 29}}>

                        <Text style={{ color: 'rgb(250,74,12)', fontWeight: 'bold', fontSize: 15 }}>
                            Forgot Passcode?
                        </Text>
                    </View>
                </View>
                {/* <View style={{flex: 1}}>
                </View> */}
            </View>
            <View style={styles.lastRow}>
                <TouchableOpacity style={styles.button} >
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'rgb(242,242,242)',
        justifyContent: 'space-between'
    },
    firstRow: {
        flex: 3.5,
        paddingHorizontal: width / 12,
        paddingTop: 50,
        justifyContent: 'flex-start'
    },
    button: {
        backgroundColor: 'rgb(250,74,12)',
        height: 65,
        borderRadius: 29,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lastRow: {
        flex: 1,
        paddingHorizontal: width / 12
    },
    inputLableColor: {
        color: 'rgb(145,145,145)',
        marginBottom: 10
    }
});

