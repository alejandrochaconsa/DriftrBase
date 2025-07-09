import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapboxGL, { MapView, Camera } from '@rnmapbox/maps'
import * as Location from 'expo-location';
import type { LocationObjectCoords } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

const mapBoxToken = "";
MapboxGL.setAccessToken(mapBoxToken);
MapboxGL.setTelemetryEnabled(false);

const mapStyles = {
  streets: MapboxGL.StyleURL.Street,
  satellite: MapboxGL.StyleURL.Satellite,
  outdoors: MapboxGL.StyleURL.Outdoors,
  light: MapboxGL.StyleURL.Light,
  dark: MapboxGL.StyleURL.Dark,
};

const App = () => {
  const [coords, setCoords] = useState<LocationObjectCoords | null>(null);
  const [styleURL, setStyleURL] = useState(mapStyles.satellite);

  useEffect(() => {
    const getUserLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.warn('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCoords(location.coords);
    };

    getUserLocation();
  }, []);

  const toggleStyle = () => {
    setStyleURL(prev =>
      prev === mapStyles.streets ? mapStyles.satellite : mapStyles.streets
    );
  };

  const moveToCurrentLocation = () => {
    if (coords) {
      setCoords(coords); // You can also set the center coordinate directly if needed.
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/driftrbase-logo-png.png')}
        style={styles.logo} 
      />
      <MapView style={styles.map} styleURL={styleURL}>
        {coords && (
          <Camera
            centerCoordinate={[coords.longitude, coords.latitude]}
            zoomLevel={12}
            animationMode="flyTo"
            animationDuration={1000}
          />
        )}
      </MapView>
      <TouchableOpacity style={styles.mapToggleButton} onPress={toggleStyle}>
        <MaterialIcons name="layers" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.locationButton} onPress={() => moveToCurrentLocation()}>
        <MaterialIcons name="my-location" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%', // Ensure full height is given to the container
    width: '100%' // Ensure full width is given to the container
  },
  logo: {
    width: 70,
    height: 70
  },
  map: {
    flex: 1
  },
  mapToggleButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 48,
    height: 48,
    marginBottom: 30,
    backgroundColor: 'white',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
  locationButton: {
    position: 'absolute',
    bottom: 120, // Adjust position as needed
    right: 20,
    width: 48,
    height: 48,
    backgroundColor: 'white',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
