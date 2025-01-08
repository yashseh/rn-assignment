import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { ICustomButtonProps } from './CustomButton.types';

const CustomButton: React.FC<ICustomButtonProps> = ({ ...customButtonProps }) => {
    return (
        <Button mode="contained" className="!bg-primary rounded-[40px] w-full h-12" {...customButtonProps}>
            {customButtonProps.children}
        </Button>
    );
};

export default CustomButton;

const styles = StyleSheet.create({});
