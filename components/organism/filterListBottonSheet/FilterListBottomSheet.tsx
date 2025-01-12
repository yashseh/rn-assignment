import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { forwardRef, useEffect, useState } from 'react';
import BaseBottomSheet from '@/components/atoms/baseBottomSheet/BaseBottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { filterValue, IFilterListBottomSheetProps, IFilterSheet, ISelectedOption } from './FilterListBottomSheet.types';
import CustomButton from '@/components/atoms/customButton/CustomButton';
import CustomRadioButton from '@/components/atoms/customRadioButton/CustomRadioButton';

const FilterListBottomSheet = forwardRef<BottomSheetModal, IFilterListBottomSheetProps>(
    ({ snapPoints, filters, onPressClear, onApply, initialSelectedOptions }, ref) => {
        const [filtersData, setFiltersData] = useState<IFilterSheet[]>(filters);
        const [selectedFilterHeading, setSelectedFilterHeading] = useState<IFilterSheet>(filters[0]);
        const [selectedOptionsMap, setSelectedOptionsMap] = useState<ISelectedOption>(new Map());

        console.log(initialSelectedOptions, 'INITIAL SELECTED OPTIONS');

        const onClose = () => {
            //@ts-ignore
            ref.current?.close();
        };

        useEffect(() => {
            setFiltersData(filters);
        }, [filters]);

        useEffect(() => {
            const initialSelectedOptionsMap: ISelectedOption = new Map();
            if (initialSelectedOptions && initialSelectedOptions.length > 0) {
                filters.forEach((filterGroup) => {
                    // Check each filterGroup for initialSelectedOptions
                    filterGroup.value.forEach((filterOption) => {
                        initialSelectedOptions.forEach((option) => {
                            if (filterOption.subTitle === option) {
                                initialSelectedOptionsMap.set(filterGroup.title, {
                                    ...filterOption,
                                    isSelected: true
                                });
                            }
                        });
                    });
                });
            }
            setSelectedOptionsMap(initialSelectedOptionsMap);
        }, [initialSelectedOptions, filters]);

        const onPressRadioButton = (filterOption: filterValue) => {
            setSelectedOptionsMap((prevMap) => {
                const updatedMap = new Map(prevMap);
                const selectedOption = { ...filterOption, isSelected: true };
                updatedMap.set(selectedFilterHeading.title, selectedOption);

                return updatedMap;
            });
        };

        const onClearFilters = () => {
            setSelectedOptionsMap(new Map());
            if (onPressClear) {
                onPressClear();
            }
        };

        const onApplyFilters = () => {
            if (onApply) {
                const selectedOptions = Array.from(selectedOptionsMap.values());
                onApply(selectedOptions);
            }
            onClose();
        };

        return (
            <BaseBottomSheet headerTitle="Filters" ref={ref} snapPoints={snapPoints} onClose={onClose}>
                <View className="flex-1">
                    <View className="flex-1 flex-row">
                        {/* Filter Headings */}
                        <View className="w-[30%] bg-background">
                            {filtersData.map((filter, index) => (
                                <Pressable
                                    key={index}
                                    onPress={() => setSelectedFilterHeading(filter)}
                                    className={`px-2 py-4 ${
                                        selectedFilterHeading.title === filter.title ? 'bg-ternary' : 'bg-background'
                                    }`}
                                >
                                    <Text
                                        className={`text-bg font-medium ${
                                            selectedFilterHeading.title === filter.title ? 'font-bold' : ''
                                        }`}
                                    >
                                        {filter.title}
                                    </Text>
                                </Pressable>
                            ))}
                        </View>

                        {/* Filter Options */}
                        <View className="w-[70%] gap-y-1 p-4 bg-ternary">
                            {selectedFilterHeading.value.map((filterOption, index) => (
                                <CustomRadioButton
                                    key={index}
                                    description={filterOption.subTitle}
                                    value={filterOption.subTitle}
                                    selectedValue={selectedOptionsMap.get(selectedFilterHeading.title)?.subTitle ?? ''}
                                    onPressRadio={() => onPressRadioButton(filterOption)}
                                />
                            ))}
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View className="justify-between my-4 flex-row">
                        <CustomButton className="w-[48%]" onPress={onApplyFilters}>
                            Apply
                        </CustomButton>
                        <CustomButton className="w-[48%]" onPress={onClearFilters}>
                            Clear
                        </CustomButton>
                    </View>
                </View>
            </BaseBottomSheet>
        );
    }
);

export default FilterListBottomSheet;
