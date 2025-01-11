import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { ICustomRadioButtonProps } from './CustomRadioButton.types';
import { RadioButton } from 'react-native-paper';

const CustomRadioButton: React.FC<ICustomRadioButtonProps> = ({
    value,
    selectedValue,
    description,
    onPressRadio,
    ...radioButtonProps
}) => {
    return (
        <Pressable onPress={onPressRadio}>
            <View className="flex flex-row items-center gap-x-2" pointerEvents="none">
                <RadioButton
                    value={value}
                    color="#ff7312"
                    uncheckedColor="#ff7312"
                    status={value === selectedValue ? 'checked' : 'unchecked'}
                    {...radioButtonProps}
                />
                {description && <Text className="text-xl">{description}</Text>}
            </View>
        </Pressable>
    );
};

export default CustomRadioButton;
