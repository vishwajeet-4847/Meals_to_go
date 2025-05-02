import React , { useRef , useEffect } from 'react';

import { Animated } from 'react-native';


export const FadeInView = ({duration = 1500 , ...props}) =>{
    const fadeAnim = useRef( new Animated.Value(0)).current;

    useEffect(() =>{
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration,
            useNativeDriver: true,
        }).start();
    },[duration,fadeAnim]);
        return (
            <Animated.View 
                style={{
                    ...props.style,
                    opacity:fadeAnim,
                }}
            >
                {props.children}
            </Animated.View>
        );
};