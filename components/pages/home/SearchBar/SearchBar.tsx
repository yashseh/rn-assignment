import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { icons } from '@/assets/exporter';
import SearchInput from '@/components/molecules/searchInput/SearchInput';

type ISearchBarProps = {
    onPressFilter: () => void;
    selectedFilter: number;
    value: string;
    onChangeText: (e: string) => void;
};
const SearchBar: React.FC<ISearchBarProps> = ({ onPressFilter, selectedFilter, value, onChangeText }) => {
    return (
        <View className="flex flex-row w-full  gap-x-2 items-center">
            <SearchInput placeholder="Search for Vendors" value={value} onChangeText={onChangeText} />

            <Pressable className="relative top-0 left-0" onPress={onPressFilter}>
                <Image className="relative top-0 left-0" source={icons.Settings_Icon} />
                {selectedFilter > 0 && <View className="w-3 h-3 bg-red absolute top-1 right-1 rounded-full " />}
            </Pressable>
        </View>
    );
};

export default SearchBar;
