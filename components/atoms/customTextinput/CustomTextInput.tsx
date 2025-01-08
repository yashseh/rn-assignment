import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { ITextInputProps } from './CustomTextInput.types';

const CustomTextInput: React.FC<ITextInputProps> = ({ errorMessage, ...textInputProps }) => {
    return (
        <View>
            <TextInput
                label={textInputProps.label}
                mode={textInputProps.mode ?? 'outlined'}
                value={textInputProps.value}
                className="!rounded-lg"
                style={styles.input}
                error={errorMessage?.length ? true : false}
                onChangeText={textInputProps.onChangeText}
                {...textInputProps}
            />
            {errorMessage && (
                <Text className="text-[10px] left-1  -bottom-[16px] absolute  text-red">{errorMessage}</Text>
            )}
        </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        position: 'relative',
        top: 0,
        left: 0
    }
});
