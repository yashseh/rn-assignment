import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops!' }} />
            <View>
                <Text>Screen does not exist</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    link: {
        marginTop: 15,
        paddingVertical: 15
    }
});
