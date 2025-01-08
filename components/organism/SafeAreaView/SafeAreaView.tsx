/* eslint-disable react-native/no-inline-styles */
import { verticalScale } from '@/constants/metrics';
import { useScreenInsets } from '@/hooks/useScreenInsets';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const SafeAreaView: React.FC<ISafeAreaViewProps> = ({ children, withPadding, backgroundColor = 'bg-primary' }) => {
    const { insetsTop, insetsBottom } = useScreenInsets();
    const styles = getStyles(insetsTop, insetsBottom, withPadding);

    return (
        <View className={backgroundColor} style={styles.container}>
            {children}
        </View>
    );
};

export default SafeAreaView;

const getStyles = (insetsTop: number, insetsBottom: number, withPadding?: boolean) => {
    const styles = StyleSheet.create({
        container: {
            paddingTop: insetsTop,
            paddingBottom: insetsBottom,
            flex: 1,
            paddingHorizontal: withPadding ? verticalScale(24) : 0
        }
    });
    return styles;
};
