import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const AuthLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="splash" />
            <Stack.Screen name="login" />
            <Stack.Screen name="user-location" />
        </Stack>
    );
};

export default AuthLayout;

const styles = StyleSheet.create({});
