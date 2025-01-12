import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SafeAreaView from '@/components/organism/SafeAreaView/SafeAreaView';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { icons } from '@/assets/exporter';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { locationFromState, updateUserLocation } from '@/state/slices/login/LoginSlice';
import { addressHandler } from '@/utils/geocoding';
import { useToast } from 'react-native-toast-notifications';

const ChangeLocation = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const toast = useToast();
    const userLocation = useSelector(locationFromState);

    const onPressBack = () => {
        router.back();
    };

    const onSelectAddress = async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
        try {
            const address = await addressHandler({ latitude: latitude, longitude: longitude });
            if (address) {
                toast.show('Address Updated Successfully', {
                    type: 'success',
                    placement: 'bottom'
                });
                dispatch(updateUserLocation({ address: address }));
            }
        } catch (error) {
            toast.show('Unable to set location', {
                type: 'danger',
                placement: 'bottom'
            });
        }
    };

    return (
        <SafeAreaView withPadding backgroundColor="!bg-background">
            <View className="flex-1">
                {/* Back button */}
                <Pressable onPress={onPressBack} className="mb-4 items-center gap-x-4 flex-row">
                    <Image source={icons.BACK_ARROW_Icon} />
                    <Text className="text-xl">Search Location</Text>
                </Pressable>
                <Text className="mb-3">Current Location</Text>
                <View className="w-full flex-row gap-x-2  mb-6">
                    <Image className="w-5 h-5" resizeMode="contain" source={icons.Location_Icon} />
                    <Text className="text-m flex-1">{userLocation?.mapAddress}</Text>
                </View>

                {/* Google Places Autocomplete */}
                <GooglePlacesAutocomplete
                    placeholder={'Search for addresses'}
                    styles={{
                        textInput: styles.textInput
                    }}
                    fetchDetails={true}
                    suppressDefaultStyles={true}
                    enablePoweredByContainer={false}
                    isRowScrollable={false}
                    nearbyPlacesAPI="GoogleReverseGeocoding"
                    currentLocation
                    onPress={(_, detail) => {
                        onSelectAddress({
                            latitude: detail?.geometry?.location?.lat ?? 0,
                            longitude: detail?.geometry?.location?.lng ?? 0
                        });
                    }}
                    renderRow={(data, index) => {
                        return (
                            <View key={index} className="w-full flex-row gap-x-2  mb-6">
                                <Image className="w-5 h-5" resizeMode="contain" source={icons.Location_Icon} />
                                <Text className="text-m">{data.description}</Text>
                            </View>
                        );
                    }}
                    query={{
                        key: 'AIzaSyBSyuQoXKGljs7QM40qz-AbyQI2IwWAMBk',
                        language: 'en',
                        components: 'country:IN',
                        radius: '5000'
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default ChangeLocation;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#868686',
        borderRadius: 20,
        marginBottom: 20,
        paddingLeft: 12,

        paddingVertical: 10
    }
});
