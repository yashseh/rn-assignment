import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import CustomTextInput from '@/components/atoms/customTextinput/CustomTextInput';
import { icons } from '@/assets/exporter';

const SearchBar = () => {
    return (
        <View className="flex flex-row w-full  gap-x-2 items-center">
            <View className="flex-1 flex-row px-2 items-center  gap-x-1 rounded-[40px] bg-white">
                <Image source={icons.Search_Icon} />
                <TextInput className="flex-1 text-text " placeholder="Search for Vendors" />
            </View>
            <View>
                <Image source={icons.Settings_Icon} />
            </View>
        </View>
    );
};

export default SearchBar;
