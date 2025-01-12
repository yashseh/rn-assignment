import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { icons } from '@/assets/exporter';
import { ISearchInputProps } from './SearchInput.types';

const SearchInput: React.FC<ISearchInputProps> = ({ value, onChangeText, placeholder }) => {
    return (
        <View className="flex-1 flex-row px-2 items-center min-h-11  gap-x-1 rounded-[40px] bg-white">
            <Image source={icons.Search_Icon} />
            <TextInput
                value={value}
                onChangeText={onChangeText}
                className="flex-1 text-text "
                placeholder={placeholder}
            />
        </View>
    );
};

export default SearchInput;

const styles = StyleSheet.create({});
