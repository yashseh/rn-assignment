import { Image, ImageBackground, Pressable, StyleSheet, ScrollView, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SafeAreaView from '@/components/organism/SafeAreaView/SafeAreaView';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { IVenderLocation, IVendor, IVendorProduct } from '@/components/pages/home/VendorCard/VendorCard.types';
import { icons } from '@/assets/exporter';
import { useScreenInsets } from '@/hooks/useScreenInsets';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { vendors } from '@/utils/mockdata';
import { addressHandler } from '@/utils/geocoding';
const VendorDetail = () => {
    const params = useLocalSearchParams();
    const { insetsTop } = useScreenInsets();
    const [vendorProducts, setVendorProducts] = useState<IVendorProduct[]>([]);
    const [venderLocation, setVendorLocation] = useState<IVenderLocation | null>(null);
    const [vendorAddress, setVendorAddress] = useState<string>('');
    const router = useRouter();
    const vendor: IVendor = params as any;
    const onPressBack = () => {
        router.back();
    };

    useEffect(() => {
        if (vendor.id) {
            const index = vendors.findIndex((vendr) => vendr.id === vendor.id);
            if (index !== -1) {
                if (vendors[index].vendor_products) {
                    setVendorProducts(vendors[index].vendor_products[0].products ?? []);
                    setVendorLocation(vendors[index].location);
                }
            }
        }
    }, [vendor.id]);

    useEffect(() => {
        getVendorAddress();
    }, [venderLocation]);

    const getVendorAddress = async () => {
        if (venderLocation?.coordinates) {
            const address = await addressHandler({
                latitude: venderLocation?.coordinates[1],
                longitude: venderLocation?.coordinates[0]
            });
            if (address) {
                setVendorAddress(address.mapAddress ?? vendor.address ?? '');
            }
        }
    };

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
                    <Image className="fill-white" source={icons.BACK_ARROW_Icon} />
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
                {vendorAddress && (
                    <View className="mt-4 transition-all  duration-500 ease-in-out opacity-100 scale-100">
                        <Text className="text-text text-xl font-bold">Vendor's Address</Text>
                        <Text>{vendorAddress}</Text>
                        {venderLocation && (
                            <View className="h-48 mt-4 rounded-xl  w-full">
                                <MapView
                                    initialRegion={{
                                        latitude: venderLocation.coordinates[1] ?? 0,
                                        longitude: venderLocation.coordinates[0] ?? 0,
                                        latitudeDelta: 0.005,
                                        longitudeDelta: 0.005
                                    }}
                                    focusable={true}
                                    provider={PROVIDER_GOOGLE}
                                    style={StyleSheet.absoluteFill}
                                >
                                    <Marker
                                        style={{ backgroundColor: 'red' }}
                                        coordinate={{
                                            latitude: venderLocation.coordinates[1],
                                            longitude: venderLocation.coordinates[0]
                                        }}
                                    />
                                </MapView>
                            </View>
                        )}
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
