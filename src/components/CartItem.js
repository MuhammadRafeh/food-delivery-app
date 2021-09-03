import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import theme from '../constants/theme';
import Animated, {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const CartItem = () => {

    const swipe = useSharedValue(0);

    const handleGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.translateX = swipe.value
        },
        onActive: (e, ctx) => {
            if (ctx.translateX + e.translationX > 0) {
                swipe.value = 0
                return
            }
            else if (ctx.translateX + e.translationX > -100){
                swipe.value =  ctx.translateX + e.translationX
            } else {
                swipe.value = -100
                return
            }
            
        }
    })

    const style = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: swipe.value}
            ]
        }
    })

    return (
        <PanGestureHandler onGestureEvent={handleGestureEvent}>
            <Animated.View style={[styles.item, style]}>
                <View style={{ flex: 1 }}>

                </View>
                <View style={{ flex: 3, paddingRight: 10, paddingLeft: 5, justifyContent: 'center' }}>
                    <View style={{ marginBottom: 6 }}>
                        <Text numberOfLines={1} style={{ fontSize: 15.5, fontWeight: 'bold', letterSpacing: -1 }}>
                            Veggie tomato mix asd asd a d a d asd a d s
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: theme.primary, fontWeight: 'bold', letterSpacing: -0.9 }}>
                            #1,900
                        </Text>
                    </View>
                    <View style={styles.counter}>
                        <Text style={{ color: 'white', paddingHorizontal: 8 }}>
                            -
                        </Text>
                        <Text style={{ color: 'white' }}>
                            1
                        </Text>
                        <Text style={{ color: 'white', paddingHorizontal: 8 }}>
                            +
                        </Text>
                    </View>
                </View>
            </Animated.View>
        </PanGestureHandler>
    );
}

export default CartItem;

const styles = StyleSheet.create({
    item: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 15,
        height: 85,
        marginVertical: 6
    },
    counter: {
        position: 'absolute',
        bottom: 12,
        right: 15,
        backgroundColor: theme.primary,
        height: 20,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
