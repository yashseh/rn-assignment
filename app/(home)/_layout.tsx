import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const HomeLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" />
            <Stack.Screen name="vendor-detail" />
            <Stack.Screen name="change-location" />
        </Stack>
    );
};

export default HomeLayout;

const styles = StyleSheet.create({});
