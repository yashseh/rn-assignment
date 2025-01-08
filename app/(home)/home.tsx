import React, { useCallback } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import SafeAreaView from '@/components/organism/SafeAreaView/SafeAreaView';
import LocationBar from '@/components/pages/home/LocationBar/LocationBar';
import SearchBar from '@/components/pages/home/SearchBar/SearchBar';
import VendorCard from '@/components/pages/home/VendorCard/VendorCard';
import { vendors } from '@/utils/mockdata';
import { IVendor } from '@/components/pages/home/VendorCard/VendorCard.types';

const Home = () => {
    const router = useRouter();

    const handleVendorPress = useCallback(
        (vendor: IVendor) =>
            router.push({
                pathname: '/(home)/vendor-detail',
                params: vendor as any
            }),
        [router]
    );

    const renderVendorCard = useCallback(
        ({ item, index }: { item: IVendor; index: number }) => (
            <VendorCard onPress={() => handleVendorPress(item)} count={index + 1} {...item} />
        ),
        [handleVendorPress]
    );

    const renderSeparator = useCallback(() => <View className="h-4" />, []);

    return (
        <SafeAreaView hideBottom>
            <View className="flex flex-col gap-y-6 px-6">
                <LocationBar />
                <SearchBar />
            </View>
            <View className="bg-white mt-6 p-6 rounded-t-[56px] flex-1">
                <Text className="text-2xl font-bold pb-2">Vendors</Text>
                <FlatList
                    data={vendors}
                    className="mt-2"
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={renderSeparator}
                    keyExtractor={(item, index) => `${item.id || ''}-${index}`}
                    renderItem={renderVendorCard}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;
