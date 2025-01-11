import { CheckboxProps } from 'react-native-paper';

export interface ICustomCheckBoxProps extends Omit<CheckboxProps, 'status'> {
    checked: boolean;
    description?: string;
}
