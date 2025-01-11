import * as Location from 'expo-location';

export const getCurrentLocation = async (): Promise<{ lat: number; long: number }> => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        throw {
            statusCode: 0,
            message: 'Location permission denied'
        };
    }
    let location = await Location.getCurrentPositionAsync({});
    if (location) {
        console.log(location, 'Location');
        return {
            lat: location.coords.latitude,
            long: location.coords.longitude
        };
    }
    throw {
        statusCode: 1,
        message: 'Location service is not available'
    };
};
