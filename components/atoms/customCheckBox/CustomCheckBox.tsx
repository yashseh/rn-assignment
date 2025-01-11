import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-paper';
import { ICustomCheckBoxProps } from './CusomCheckBox.types';
const CustomCheckBox: React.FC<ICustomCheckBoxProps> = ({ checked, description, ...checkBoxProps }) => {
    return (
        <View className="flex flex-row items-center gap-x-2">
            <Checkbox
                color="#ff7312"
                uncheckedColor="#182452"
                status={checked ? 'checked' : 'unchecked'}
                {...checkBoxProps}
            />
            {description && <Text>{description}</Text>}
        </View>
    );
};

export default CustomCheckBox;

const styles = StyleSheet.create({});
