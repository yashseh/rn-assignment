import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { locationFromState, userFromState } from '@/state/slices/login/LoginSlice';
import { router, useNavigation } from 'expo-router';

const Splash = () => {
    const user = useSelector(userFromState);
    const userLocation = useSelector(locationFromState);

    useEffect(() => {
        setTimeout(() => {
            navigationHandler();
        }, 500);
    });
    const navigationHandler = () => {
        if (user) {
            if (userLocation) {
                router.replace('/(home)/home');
            } else {
                router.replace('/(auth)/user-location');
            }
        } else {
            router.replace('/(auth)/login');
        }
    };

    return (
        <View className="flex-1 bg-primary flex-row justify-center items-center">
            <Text className="text-white text-5xl">Assignment</Text>
        </View>
    );
};

export default Splash;
