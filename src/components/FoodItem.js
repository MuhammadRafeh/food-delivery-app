import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import theme from '../constants/theme';

const FoodItem = props => { //parentDimensions
    const { parentDimensions, item } = props;
    console.log(parentDimensions)
    return (
        <View style={[styles.card, { width: parentDimensions.height / 1.4, height: parentDimensions.height - 40 }]}>
            <View style={{ height: '55%' }}>

            </View>
            <View style={{ height: '45%', width: '96%', alignItems: 'center', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                <View style={{marginBottom: 15}}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}} numberOfLines={2} adjustsFontSizeToFit={true}>{item.name}</Text>
                </View>
                <View>
                    <Text style={{color: theme.primary}}>${item.price}</Text>
                </View>
            </View>
        </View>
    );
}

export default FoodItem;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginRight: 20,
        marginVertical: 20,
        elevation: 1,
        borderRadius: 20,
    }
});
