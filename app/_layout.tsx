import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import '../global.css';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import store from '@/state/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-native-toast-notifications';
import LoaderWrapper from '@/wrappers/loaderWrapper';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
    initialRouteName: '(auth)'
};

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
                        <Stack screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="(auth)" />
                            <Stack.Screen name="(home)" />
                            <Stack.Screen name="+not-found" />
                        </Stack>
                        <StatusBar translucent backgroundColor="transparent" style="auto" />
                    </LoaderWrapper>
                </ToastProvider>
            </PersistGate>
        </Provider>
    );
}
