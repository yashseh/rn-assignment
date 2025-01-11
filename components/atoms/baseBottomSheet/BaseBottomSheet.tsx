import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { IBaseBottomSheetProps } from './BaseBottomSheet.types';
import { Portal } from '@gorhom/portal';

const BaseBottomSheet = React.forwardRef<BottomSheet, IBaseBottomSheetProps>(
    ({ snapPoints, onClose, modalStyles, gestureEnabled, onOpen, children, headerTitle }, ref) => {
        const handleSheetChanges = useCallback(
            (index: number) => {
                index < 1 ? onClose?.() : onOpen?.();
            },
            [onClose, onOpen]
        );
        return (
            <Portal>
                <BottomSheet
                    index={0}
                    enableContentPanningGesture={gestureEnabled}
                    enableHandlePanningGesture={gestureEnabled}
                    onChange={handleSheetChanges}
                    backdropComponent={BottomSheetBackdrop}
                    snapPoints={snapPoints}
                    ref={ref}
                >
                    <View className="flex-1 px-6">
                        <Text>{headerTitle}</Text>
                        <View className="flex-1 mt-3">{children}</View>
                    </View>
                </BottomSheet>
            </Portal>
        );
    }
);

export default BaseBottomSheet;

const styles = StyleSheet.create({});
