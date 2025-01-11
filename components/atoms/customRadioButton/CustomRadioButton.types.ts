import { RadioButtonProps } from 'react-native-paper';

export interface ICustomRadioButtonProps extends Omit<RadioButtonProps, 'status'> {
    value: string;
    selectedValue: string;
    description?: string;
    onPressRadio: () => void;
}
