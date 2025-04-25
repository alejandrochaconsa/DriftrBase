import { View, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Mapbox, { MapView, Camera } from "@rnmapbox/maps";
import * as Location from 'expo-location';
import type { LocationObjectCoords } from 'expo-location';

const mapBoxToken = "ADDKEY";
Mapbox.setAccessToken(mapBoxToken);

const App = () => {
  const [coords, setCoords] = useState<LocationObjectCoords | null>(null);

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

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/driftrbase-logo-png.png')}
        style={styles.logo} 
      />
      <MapView style={styles.map}>
        {coords && (
          <Camera
            centerCoordinate={[coords.longitude, coords.latitude]}
            zoomLevel={12}
            animationMode="flyTo"
            animationDuration={1000}
          />
        )}
      </MapView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  logo: {
    width: 80,
    height: 80,
  },
  map: {
    flex: 1
  }
});
