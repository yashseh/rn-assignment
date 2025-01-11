import { StyleProp, ViewStyle } from 'react-native';
import { BottomSheetProps } from '@gorhom/bottom-sheet';
export interface IBaseBottomSheetProps {
    snapPoints: Array<number>;
    children: React.ReactNode;
    ref: React.RefObject<BottomSheetProps>;
    onClose: () => void;
    onOpen?: () => void;
    headerTitle?: string;
    gestureEnabled?: boolean;
    onBackDropPress?: () => void;
    backgroundColor?: string;
    withoutBackDrop?: boolean;
    headerBackgroundColor?: string;
    modalStyles?: StyleProp<ViewStyle>;
}
