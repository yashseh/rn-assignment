import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import SafeAreaView from '@/components/organism/SafeAreaView/SafeAreaView';
import LocationBar from '@/components/pages/home/LocationBar/LocationBar';
import SearchBar from '@/components/pages/home/SearchBar/SearchBar';
import VendorCard from '@/components/pages/home/VendorCard/VendorCard';
import { HomeFilters, vendors } from '@/utils/mockdata';
import { IVendor } from '@/components/pages/home/VendorCard/VendorCard.types';
import { useSelector } from 'react-redux';
import { locationFromState } from '@/state/slices/login/LoginSlice';
import BaseBottomSheet from '@/components/atoms/baseBottomSheet/BaseBottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import CustomRadioButton from '@/components/atoms/customRadioButton/CustomRadioButton';
import CustomButton from '@/components/atoms/customButton/CustomButton';
import { STRINGS } from '@/constants/Strings';
import { haversineDistance } from '@/utils/utils';
import FilterListBottomSheet from '@/components/organism/filterListBottonSheet/FilterListBottomSheet';
import { filterValue } from '@/components/organism/filterListBottonSheet/FilterListBottomSheet.types';

const Home = () => {
    const router = useRouter();
    const bottomSheetRef = useRef<BottomSheetModal | null>(null);
    const filterSheetRef = useRef<BottomSheetModal | null>(null);
    const userLocation = useSelector(locationFromState);
    const [search, setSearch] = useState('');
    const [vendorsList, setSelectedVendors] = useState<IVendor[]>([]);
    const [selectedFilter, setSelectedFilters] = useState<string[]>([]);
    const [sortByVal, setSortByVal] = useState<'none' | 'Rating' | 'Distance'>('none');

    useEffect(() => {
        setSelectedVendors(vendors);
    }, []);

    const handleVendorPress = useCallback(
        (vendor: IVendor) =>
            router.push({
                pathname: '/(home)/vendor-detail',
                params: vendor as any
            }),

        [router]
    );

    const sortViaRating = () => {
        setSelectedVendors(
            [...vendorsList].sort((a, b) => {
                if (a.rating && b.rating) {
                    return b.rating - a.rating;
                }
                return 0;
            })
        );
    };
    const sortViaDistance = () => {
        setSelectedVendors(
            [...vendorsList].sort((a, b) => {
                if (a.location.coordinates && b.location.coordinates) {
                    const distanceA = haversineDistance(
                        userLocation?.latitude,
                        userLocation?.longitude,
                        a.location.coordinates[1],
                        a.location.coordinates[0]
                    );
                    const distanceB = haversineDistance(
                        userLocation?.latitude,
                        userLocation?.longitude,
                        b.location.coordinates[1],
                        b.location.coordinates[0]
                    );

                    return distanceA - distanceB;
                }
                return 0;
            })
        );
    };

    useEffect(() => {
        setSelectedFilters([]);
        setSortByVal('none');
        if (search.length > 0) {
            const loclVendors = vendorsList.filter(
                (vendor) =>
                    vendor.name?.toLowerCase().includes(search.toLowerCase()) ||
                    vendor.vendor_brand?.toLowerCase().includes(search.toLowerCase())
            );
            setSelectedVendors(loclVendors);
        } else {
            setSelectedVendors(vendors);
        }
    }, [search]);

    const renderVendorCard = useCallback(
        ({ item, index }: { item: IVendor; index: number }) => (
            <VendorCard onPress={() => handleVendorPress(item)} count={index + 1} {...item} />
        ),
        [handleVendorPress]
    );

    const renderSeparator = useCallback(() => <View className="h-4" />, []);

    const sorByHandler = (value: 'none' | 'Rating' | 'Distance') => {
        setSortByVal(value);
        bottomSheetRef.current?.close();
        if (value === 'Rating') {
            sortViaRating();
        }
        if (value === 'Distance') {
            sortViaDistance();
        }
        if (value === 'none') {
            setSelectedVendors(vendorsList);
        }
    };

    const onPressApplyFilter = (values: filterValue[]) => {
        setSortByVal('none');

        // Reset to the original vendors list for filtering
        let filteredVendors = [...vendors];

        values.forEach((filter) => {
            setSelectedFilters((prevFilters) => [
                ...(prevFilters ?? ''),
                ...values.map((filter) => filter.subTitle ?? '')
            ]);
            const filterValue = parseFloat(filter.value); // Convert value to a float
            console.log('Applying filter:', filter, 'Parsed Value:', filterValue);

            if (filter.rowId === 1) {
                if (filter.subTitle === STRINGS.lessThanFive) {
                    filteredVendors = filteredVendors.filter((vendor) => vendor.rating && vendor.rating <= filterValue);
                } else if (filter.subTitle === STRINGS.greaterThanFive) {
                    filteredVendors = filteredVendors.filter((vendor) => vendor.rating && vendor.rating > 5);
                } else if (filter.subTitle === STRINGS.greaterThanSeven) {
                    filteredVendors = filteredVendors.filter((vendor) => vendor.rating && vendor.rating > 7);
                }
            }

            if (filter.rowId === 5) {
                filteredVendors = filteredVendors.filter((vendor) => {
                    if (vendor.location.coordinates) {
                        const distance = haversineDistance(
                            userLocation?.latitude,
                            userLocation?.longitude,
                            vendor.location.coordinates[1],
                            vendor.location.coordinates[0]
                        );
                        console.log(`Vendor Distance: ${distance}km, Filter Value: ${filterValue}km`);
                        return distance <= filterValue;
                    }
                    return false;
                });
            }
        });
        setSelectedVendors(filteredVendors);
    };

    const onPressClear = () => {
        filterSheetRef.current?.close();
        setSortByVal('none');
        setSelectedFilters([]);
        setSelectedVendors(vendors);
    };

    return (
        <SafeAreaView hideBottom>
            <View className="flex flex-col gap-y-6 px-6">
                <LocationBar />
                <SearchBar
                    value={search}
                    onChangeText={(e) => setSearch(e)}
                    selectedFilter={selectedFilter?.length ?? 0}
                    onPressFilter={() => filterSheetRef.current?.snapToIndex(1)}
                />
            </View>
            <View className="bg-white mt-6 p-6 rounded-t-[56px] flex-1">
                <View className="flex-row items-center">
                    <Text className="text-2xl flex-1 font-bold pb-2">Vendors</Text>
                    <Text onPress={() => bottomSheetRef.current?.snapToIndex(1)} className="text-orange  text-xl">
                        {STRINGS.sortBy}
                    </Text>
                </View>
                <FlatList
                    data={vendorsList}
                    className="mt-2"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                    ItemSeparatorComponent={renderSeparator}
                    keyExtractor={(item, index) => `${item.id || ''}-${index}`}
                    ListEmptyComponent={
                        <View className="flex-1 flex-row justify-center  items-center">
                            <Text className="text-center text-2xl">No Vendors</Text>
                        </View>
                    }
                    renderItem={renderVendorCard}
                />
                <BaseBottomSheet
                    snapPoints={[0.01, 200]}
                    headerTitle="SORT BY"
                    ref={bottomSheetRef}
                    onClose={() => bottomSheetRef.current?.close()}
                    children={
                        <View>
                            <CustomRadioButton
                                onPressRadio={() => sorByHandler('Rating')}
                                description="Rating"
                                value={'Rating'}
                                selectedValue={sortByVal}
                            />
                            <CustomRadioButton
                                onPressRadio={() => sorByHandler('Distance')}
                                description="Distance"
                                value={'Distance'}
                                selectedValue={sortByVal}
                            />
                            <CustomButton
                                disabled={sortByVal === 'none'}
                                className="mt-3 "
                                onPress={() => sorByHandler('none')}
                            >
                                {STRINGS.clear}
                            </CustomButton>
                        </View>
                    }
                />
                <FilterListBottomSheet
                    ref={filterSheetRef}
                    initialSelectedOptions={selectedFilter}
                    filters={HomeFilters}
                    onPressClear={onPressClear}
                    snapPoints={[0.01, 280]}
                    onApply={onPressApplyFilter}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;
