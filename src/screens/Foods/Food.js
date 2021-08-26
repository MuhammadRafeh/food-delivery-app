import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import FoodItemsList from '../../components/FoodItemsList';
import theme from '../../constants/theme';
import foodItem from '../../data/Items';

const Food = props => {
    const [foodListHeight, setFoodListHeight] = useState(null);
    const [foodListWidth, setFoodListWidth] = useState(null);
    return (
        <View style={styles.screen}>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', marginRight: 35 }}>
                <Text style={{ color: theme.primary }}>see more</Text>
            </View>
            <View style={{ flex: 3.5 }} onLayout={(e) => {
                setFoodListHeight(e.nativeEvent.layout.height);
                setFoodListWidth(e.nativeEvent.layout.width);
            }}>
                <FoodItemsList foodItemsList={foodItem} parentDimensions={{width: foodListWidth, height: foodListHeight}}/>
            </View>
        </View>
    );
}

export default Food;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // backgroundColor: 'blue'
        // justifyContent: 'space-around'
    }
});
