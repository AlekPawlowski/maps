/// <reference types="@types/google.maps" />

// instruction for other object 
// on how they can be add to method addMarker() 
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string; 
    color: string;
}
export default class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(this.googleMap, marker)
        })
        const color: string = mappable.color;
        console.log(color);
    }
}