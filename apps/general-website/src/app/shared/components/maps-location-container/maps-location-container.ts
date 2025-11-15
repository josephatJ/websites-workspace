import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-maps-location-container',
  imports: [GoogleMapsModule],
  templateUrl: './maps-location-container.html',
  styleUrl: './maps-location-container.css',
})
export class MapsLocationContainer implements AfterViewInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  zoom = 15;
  center: google.maps.LatLngLiteral = { lat: -6.7687728, lng: 39.2278758 };
  infoWindow = new google.maps.InfoWindow();

  mapOptions: google.maps.MapOptions = {
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: false,
  };

  ngAfterViewInit(): void {
    // Create location button
    const locationButton = document.createElement('button');
    locationButton.textContent = 'Pan to Current Location';
    locationButton.classList.add('custom-map-control-button');

    // Position inside map UI
    this.map.googleMap?.controls[google.maps.ControlPosition.TOP_CENTER].push(
      locationButton
    );

    // Add click event
    locationButton.addEventListener('click', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            this.infoWindow.setPosition(pos);
            this.infoWindow.setContent('Location found.');
            this.infoWindow.open(this.map.googleMap!);
            this.map.googleMap?.setCenter(pos);
          },
          () => {
            this.handleLocationError(
              true,
              this.infoWindow,
              this.map.googleMap!.getCenter()!
            );
          }
        );
      } else {
        this.handleLocationError(
          false,
          this.infoWindow,
          this.map.googleMap!.getCenter()!
        );
      }
    });
  }

  handleLocationError(
    browserHasGeolocation: boolean,
    infoWindow: google.maps.InfoWindow,
    pos: google.maps.LatLng
  ) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? 'Error: The Geolocation service failed.'
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(this.map.googleMap!);
  }
  // @ViewChild(GoogleMap) map!: GoogleMap;
  // @ViewChild(MapMarker) marker!: MapMarker;

  // zoom = 14;
  // center: google.maps.LatLngLiteral = { lat: -6.7687728, lng: 39.2278758 };
  // markerPosition: google.maps.LatLngLiteral = this.center;

  // locationText = `Lat: ${this.center.lat}, Lng: ${this.center.lng}`;

  // mapOptions: google.maps.MapOptions = {
  //   mapTypeId: 'roadmap',
  //   zoomControl: true,
  //   streetViewControl: false,
  //   fullscreenControl: false,
  // };

  // updateLocation(event: any) {
  //   if (event.latLng != null) {
  //     const lat = event?.latLng.lat();
  //     const lng = event?.latLng.lng();
  //     this.center = { lat, lng };
  //     this.markerPosition = { lat, lng };
  //     this.locationText = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
  //   }
  // }

  // locateMe() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const lat = position.coords.latitude;
  //         const lng = position.coords.longitude;

  //         this.center = { lat, lng };
  //         this.markerPosition = { lat, lng };
  //         this.locationText = `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`;
  //         this.zoom = 16;
  //       },
  //       () => alert('Unable to retrieve location. Check permissions.')
  //     );
  //   } else {
  //     alert('Geolocation not supported');
  //   }
  // }
}
