import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import CustomTextInput from '@/components/atoms/customTextinput/CustomTextInput';
import { icons } from '@/assets/exporter';

type ISearchBarProps = {
    onPressFilter: () => void;
    selectedFilter: number;
};
const SearchBar: React.FC<ISearchBarProps> = ({ onPressFilter, selectedFilter }) => {
    return (
        <View className="flex flex-row w-full  gap-x-2 items-center">
            <View className="flex-1 flex-row px-2 items-center  gap-x-1 rounded-[40px] bg-white">
                <Image source={icons.Search_Icon} />
                <TextInput className="flex-1 text-text " placeholder="Search for Vendors" />
            </View>

            <Pressable className="relative top-0 left-0" onPress={onPressFilter}>
                <Image className="relative top-0 left-0" source={icons.Settings_Icon} />
                {selectedFilter && <View className="w-3 h-3 bg-red absolute top-1 right-1 rounded-full " />}
            </Pressable>
        </View>
    );
};

export default SearchBar;
