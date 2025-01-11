import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { icons } from '@/assets/exporter';
import { STRINGS } from '@/constants/Strings';
import { locationFromState } from '@/state/slices/login/LoginSlice';
import { useSelector } from 'react-redux';

const LocationBar = () => {
    const userAddress = useSelector(locationFromState);
    return (
        <View className="flex flex-row  justify-between">
            <View className="flex flex-1 flex-row gap-x-3">
                <Image source={icons.Location_Icon} />
                <Text className="text-white">{userAddress?.mapAddress}</Text>
            </View>
            <Text className="text-orange">{STRINGS.change}</Text>
        </View>
    );
};

export default LocationBar;

const styles = StyleSheet.create({});
