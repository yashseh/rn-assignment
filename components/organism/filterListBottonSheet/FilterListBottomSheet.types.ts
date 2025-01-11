export interface IFilterListBottomSheetProps {
    filters: IFilterSheet[];
    snapPoints: number[];
    title?: string;
    initialSelectedOptions?: string[];
    onApply: (values: filterValue[]) => void;
    withClearButton?: boolean;
    buttonTitle?: string;
    onPressClear?: () => void;
}

export type IFilterSheet = {
    id: number;
    title: string;
    value: filterValue[];
};

export type filterValue = {
    id: number;
    subTitle: string;
    isSelected?: boolean;
    value: string;
    rowId: number;
};

export type ISelectedOption = Map<string, filterValue>;
