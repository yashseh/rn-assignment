import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { vendors } from '@/utils/mockdata';
import { icons } from '@/assets/exporter';
import { IVendorCardProps } from './VendorCard.types';
import { Link } from 'expo-router';

const VendorCard: React.FC<IVendorCardProps> = ({ ...vendor }) => {
    const { name, brand_image, brand_logo, rating, vendor_brand, count, onPress } = vendor;
    return (
        <Pressable
            onPress={onPress}
            className="flex border-[1px] p-2 rounded-lg border-[#EDEDED] flex-row  justify-between"
        >
            <View className="flex flex-1 gap-x-3 items-center flex-row">
                {brand_image && <Image className="w-[88px] h-[88px] rounded-lg" source={{ uri: brand_image }} />}
                <View className="flex-col gap-y-1">
                    <Text className="text-xl font-bold">{name ?? ''}</Text>

                    <View className="flex flex-row gap-x-2 items-center">
                        <Image className="w-4 h-4" source={icons.STAR_Icon} />
                        <Text className="text-text font-bold ">{rating ?? 0}</Text>
                    </View>
                    <View className="flex gap-x-2 items-center flex-row">
                        {brand_logo && (
                            <Image
                                resizeMode="center"
                                className="w-10 h-10 bg-black border-[1px] border-gray-300 rounded-full"
                                source={{ uri: brand_logo }}
                            />
                        )}
                        <Text className="text-text">{vendor_brand ?? ''}</Text>
                    </View>
                </View>
            </View>
            <View className="flex flex-col justify-between items-end">
                <Text className="text-1xl font-bold text-disabled border-[1px] p-2 border-[#EDEDED] rounded-full ">
                    {count}
                </Text>
            </View>
        </Pressable>
    );
};

export default VendorCard;

const styles = StyleSheet.create({});
