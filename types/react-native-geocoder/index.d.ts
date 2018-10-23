// Type definitions for react-native-geocoder
// Project: https://github.com/devfd/react-native-geocoder
// Definitions by: Eliot Ball https://github.com/eliotball
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "react-native-geocoder" {
    export interface Position {
        lat: number;
        lng: number;
    }

    export interface Geocoding {
        position: Position;
        formattedAddress: string;
        feature: string | null;
        streetNumber: string | null;
        streetName: string | null;
        postalCode: string | null;
        locality: string | null;
        country: string,
        countryCode: string
        adminArea: string | null
        subAdminArea: string | null,
        subLocality: string | null
    }

    namespace Geocoder {
        function geocodePosition(position: Position): Promise<Geocoding[]>;
        function geocodeAddress(address: string): Promise<Geocoding[]>;
        function fallbackToGoogle(key: string): void;
    }

    export default Geocoder;
}
