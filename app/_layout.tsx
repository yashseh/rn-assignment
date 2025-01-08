import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import '../global.css';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import store from '@/state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-native-toast-notifications';
import LoaderWrapper from '@/wrappers/loaderWrapper';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Provider store={store.store}>
            <PersistGate loading={null} persistor={store.persistor}>
                <ToastProvider placement="top" duration={3000} animationType="zoom-in" swipeEnabled>
                    <LoaderWrapper>
                        <Stack initialRouteName="login" screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="login" />
                            <Stack.Screen name="index" />
                            <Stack.Screen name="+not-found" />
                        </Stack>
                        <StatusBar translucent backgroundColor="transparent" style="auto" />
                    </LoaderWrapper>
                </ToastProvider>
            </PersistGate>
        </Provider>
    );
}
