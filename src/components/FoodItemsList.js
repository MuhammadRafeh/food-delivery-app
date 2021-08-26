import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import FoodItem from './FoodItem';

const FoodItemsList = props => {
    return (
        <ScrollView horizontal>
            {props.foodItemsList.map((item, key) => {
                return (
                    <FoodItem parentDimensions={props.parentDimensions} item={item}/>
                );
            })}
        </ScrollView>
    );
}

export default FoodItemsList;

// const styles = StyleSheet.create({
//     screen: {

//     }
// });
