/// <reference types="@types/google.maps" />

// import User from './User';
// import Company from './Company';
const mapElement = document.getElementById('map') as HTMLElement;

const map = new google.maps.Map(mapElement, {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0
    }
});


export default class CustomMap {
    googleMap: google.maps.Map;
}