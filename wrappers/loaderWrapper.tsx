import { View, StyleSheet } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import LoaderKit from 'react-native-loader-kit';
import { verticalScale } from '@/constants/metrics';
import { loadingStateFromSlice } from '@/state/slices/loading/LoadingSlice';

type ILoaderWrapperProps = {
    children: React.ReactNode;
};

const LoaderWrapper: React.FC<ILoaderWrapperProps> = ({ children }) => {
    const isLoading = useSelector(loadingStateFromSlice);

    return (
        <>
            <View style={styles.childrenContainer}>
                <View style={styles.childrenContainer}>{children}</View>
                {isLoading && (
                    <View style={styles.loaderBlackOverlay}>
                        <LoaderKit style={styles.loader} name={'BallClipRotatePulse'} color={'#182452'} />
                    </View>
                )}
            </View>
        </>
    );
};

export default LoaderWrapper;

export const styles = StyleSheet.create({
    childrenContainer: {
        flex: 1
    },
    loaderBlackOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loader: {
        width: verticalScale(56),
        height: verticalScale(56)
    }
});
