import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-maps-location-container',
  imports: [GoogleMapsModule],
  templateUrl: './maps-location-container.html',
  styleUrl: './maps-location-container.css',
})
export class MapsLocationContainer {
  @ViewChild(GoogleMap) map!: GoogleMap;
  @ViewChild(MapMarker) marker!: MapMarker;

  zoom = 14;
  center: google.maps.LatLngLiteral = { lat: -6.7687728, lng: 39.2278758 };
  markerPosition: google.maps.LatLngLiteral = this.center;

  locationText = `Lat: ${this.center.lat}, Lng: ${this.center.lng}`;

  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
  };

  updateLocation(event: any) {
    if (event.latLng != null) {
      const lat = event?.latLng.lat();
      const lng = event?.latLng.lng();
      this.center = { lat, lng };
      this.markerPosition = { lat, lng };
      this.locationText = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
    }
  }

  locateMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          this.center = { lat, lng };
          this.markerPosition = { lat, lng };
          this.locationText = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
          this.zoom = 16;
        },
        () => alert('Unable to retrieve location. Check permissions.')
      );
    } else {
      alert('Geolocation not supported');
    }
  }
}
