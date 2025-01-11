import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { icons } from '@/assets/exporter';
import { STRINGS } from '@/constants/Strings';
import { locationFromState } from '@/state/slices/login/LoginSlice';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';

const LocationBar = () => {
    const userAddress = useSelector(locationFromState);
    const route = useRouter();
    return (
        <View className="flex flex-row  justify-between">
            <View className="flex flex-1 flex-row gap-x-3">
                <Image source={icons.Location_Icon} />
                <Text className="text-white flex-1">{userAddress?.mapAddress}</Text>
            </View>
            <Text onPress={() => route.push('/(home)/change-location')} className="text-orange">
                {STRINGS.change}
            </Text>
        </View>
    );
};

export default LocationBar;

const styles = StyleSheet.create({});
