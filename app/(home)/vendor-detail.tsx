import { Image, ImageBackground, Pressable, StyleSheet, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SafeAreaView from '@/components/organism/SafeAreaView/SafeAreaView';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { IVendor, IVendorProduct } from '@/components/pages/home/VendorCard/VendorCard.types';
import { icons } from '@/assets/exporter';
import { useScreenInsets } from '@/hooks/useScreenInsets';
import { vendors } from '@/utils/mockdata';
const VendorDetail = () => {
    const params = useLocalSearchParams();
    const { insetsTop } = useScreenInsets();
    const [vendorProducts, setVendorProducts] = useState<IVendorProduct[]>([]);
    const router = useRouter();
    const vendor: IVendor = params as any;
    const onPressBack = () => {
        router.back();
    };

    useEffect(() => {
        if (vendor.id) {
            const index = vendors.findIndex((vendr) => vendr.id === vendor.id);
            if (index != 0) {
                if (vendors[index].vendor_products) {
                    setVendorProducts(vendors[index].vendor_products[0].products ?? []);
                }
            }
        }
    }, [vendor.id]);

    console.log(vendorProducts, 'vendor_products');
    return (
        <ScrollView contentContainerStyle={styles.contentContainer} className="flex-1 bg-white">
            <ImageBackground
                className={`w-full h-[30%] rounded-b-lg pl-6`}
                style={{ paddingTop: insetsTop }}
                resizeMode="cover"
                source={{ uri: vendor.brand_image ?? '' }}
            >
                <Pressable
                    onPress={onPressBack}
                    className="border-[1px] w-10 h-10 flex-row justify-center items-center border-white p-1 rounded-full"
                >
                    <Image tintColor={'#fff'} source={icons.BACK_ARROW_Icon} />
                </Pressable>
            </ImageBackground>
            <View className="px-6  flex-1 pt-6">
                <View className=" flex-col gap-y-2">
                    <View className="flex-row  items-center">
                        <Text className="text-text flex-1 font-bold text-3xl">{vendor.name}</Text>
                        <View className=" gap-x-2   items-center flex-row">
                            {vendor.brand_logo && (
                                <Image
                                    resizeMode="center"
                                    className="w-10 h-10 bg-black border-[1px] border-gray-300 rounded-full"
                                    source={{ uri: vendor.brand_logo }}
                                />
                            )}
                            <Text className="text-text">{vendor.vendor_brand ?? ''}</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center gap-x-2">
                        <Image className="w-6 h-6" source={icons.STAR_Icon} />
                        <Text className="font-bold text-xl">{vendor.rating}</Text>
                    </View>
                    <Text className="text-disabled">{vendor.address}</Text>
                </View>

                {vendorProducts.length > 0 && (
                    <View className="mt-4">
                        <Text className="text-text text-xl font-bold">Products</Text>
                        <View className=" flex-1 mt-4  gap-x-3 flex-wrap flex-row">
                            {vendorProducts.map((item, index) => (
                                <View className="border-[2px] p-2 border-[#EDEDED] " key={index}>
                                    <Text className="text-text">{item.product_variation?.product?.name}</Text>
                                    <Text>Rs.{item.sale_price}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default VendorDetail;

const styles = StyleSheet.create({
    contentContainer: {
        flexGrow: 1
    }
});
