import { Alert, Image, Linking, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { icons } from '@/assets/exporter';
import SafeAreaView from '@/components/organism/SafeAreaView/SafeAreaView';
import { ICustomizedErrorResponse } from '@/adapters/types';
import {
    getLocationCount,
    updateGetLocationCount,
    updateUserLocation,
    userFromState
} from '@/state/slices/login/LoginSlice';
import { addressHandler } from '@/utils/geocoding';
import { getCurrentLocation } from '@/utils/locationGetter';
import { useDispatch, useSelector } from 'react-redux';
import { router } from 'expo-router';
import { STRINGS } from '@/constants/Strings';

const UserLocation = () => {
    const dispatch = useDispatch();
    const user = useSelector(userFromState);
    const locationAskCount = useSelector(getLocationCount);

    useEffect(() => {
        fetchLocationAndNavigate();
    }, []);

    const fetchLocationAndNavigate = async () => {
        try {
            const location = await getCurrentLocation();
            if (location) {
                const address = await addressHandler({ latitude: location.lat, longitude: location.long });
                if (address) {
                    dispatch(updateUserLocation({ address: address }));
                    navigationHandler();
                }
            }
        } catch (error) {
            handleLocationError(error as ICustomizedErrorResponse);
        }
    };

    const handleLocationError = (err: ICustomizedErrorResponse) => {
        if (err.statusCode === 0) {
            dispatch(updateGetLocationCount());
            if (locationAskCount < 2) {
                Alert.alert(
                    'Permission Denied',
                    'Location permission is required to continue. Would you like to retry?',
                    [{ text: 'Retry', onPress: fetchLocationAndNavigate }]
                );
            } else {
                Alert.alert('Location Required', STRINGS.itLooksLike, [
                    { text: 'Go to Settings', onPress: () => Linking.openSettings() }
                ]);
            }
        } else {
            console.error('Unexpected Error:', err?.message || err);
        }
    };

    const navigationHandler = () => {
        router.replace('/(home)/home');
    };

    return (
        <SafeAreaView withPadding>
            <View className="  flex-1 gap-y-5 justify-center items-center">
                <Image
                    className="w-20 h-20 object-contain animate-bounce"
                    resizeMode="contain"
                    source={icons.Location_Icon}
                />
                <Text className="text-orange text-2xl">FETCHING LOCATION...</Text>
            </View>
        </SafeAreaView>
    );
};

export default UserLocation;

const styles = StyleSheet.create({});
