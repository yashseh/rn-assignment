import Geocoder from 'react-native-geocoding';
export type ILocationProps = {
    latitude?: any | null;
    longitude?: any | null;
    mapAddress?: string | null;
    addressLine2?: string | null;
    addressLine1?: string | null;
    city?: string | null;
    state?: string | null;
    saveAs?: string | null;
    country?: string | null;
    zipCode?: string | null;
    addressId?: number | null | undefined;
    comment?: string | null | undefined;
};

export const addressHandler = async ({
    latitude,
    longitude
}: {
    latitude: number;
    longitude: number;
}): Promise<ILocationProps | null> => {
    let addressLaneTwoArray: string[] = [];
    let addressObj: ILocationProps | null = null;
    await Geocoder.from(latitude, longitude)
        .then(async (json) => {
            addressObj = {
                ...addressObj,
                mapAddress: json.results[0].formatted_address,
                latitude: json.results[0].geometry.location.lat,
                longitude: json.results[0].geometry.location.lng
            };
            json.results[0].address_components.map((elem) => {
                if (
                    elem.types[0] === 'street_number' ||
                    elem.types[0] === 'route' ||
                    elem.types[0] === 'premise' ||
                    elem.types[0] === 'landmark' ||
                    elem.types[0] === 'neighborhood' ||
                    elem.types[0] === 'sublocality' ||
                    elem.types[0] === 'political'
                ) {
                    addressLaneTwoArray.push(elem.long_name);
                } else if (elem.types[0] === 'locality' || elem.types[0] === 'administrative_area_level_3') {
                    addressObj = {
                        ...addressObj,
                        city: elem.long_name
                    };
                } else if (elem.types[0] === 'administrative_area_level_1') {
                    addressObj = {
                        ...addressObj,
                        state: elem.long_name
                    };
                } else if (elem.types[0] === 'country') {
                    addressObj = {
                        ...addressObj,
                        country: elem.long_name
                    };
                } else if (elem.types[0] === 'postal_code') {
                    addressObj = {
                        ...addressObj,
                        zipCode: elem.long_name
                    };
                }
            });
            addressObj = {
                ...addressObj,
                addressLine2: addressLaneTwoArray.join(',')
            };
        })
        .catch((error) => {
            throw error;
        });

    return addressObj;
};
