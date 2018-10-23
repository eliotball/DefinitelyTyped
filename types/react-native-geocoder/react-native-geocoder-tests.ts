import Geocoder from "react-native-geocoder";

Geocoder.fallbackToGoogle("abc");

const positionPromise = Geocoder.geocodePosition({
    lat: 50,
    lng: 50,
});
positionPromise.then((results) => {
    results.forEach((result) => {
        console.log(result.adminArea);
        console.log(result.country);
        console.log(result.countryCode);
        console.log(result.feature);
        console.log(result.formattedAddress);
        console.log(result.locality);
        console.log(result.position);
        console.log(result.postalCode);
        console.log(result.streetName);
        console.log(result.streetNumber);
        console.log(result.subAdminArea);
        console.log(result.subLocality);
    });
}).catch((reason) => {
    console.log(reason);
});

const addressPromise = Geocoder.geocodeAddress("New York");
addressPromise.then((results) => {
    results.forEach((result) => {
        console.log(result.adminArea);
        console.log(result.country);
        console.log(result.countryCode);
        console.log(result.feature);
        console.log(result.formattedAddress);
        console.log(result.locality);
        console.log(result.position);
        console.log(result.postalCode);
        console.log(result.streetName);
        console.log(result.streetNumber);
        console.log(result.subAdminArea);
        console.log(result.subLocality);
    });
}).catch((reason) => {
    console.log(reason);
});
