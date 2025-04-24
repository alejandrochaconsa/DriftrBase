import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import Mapbox, {MapView} from "@rnmapbox/maps";

const mapBoxToken = "KEYREVOKED";

Mapbox.setAccessToken(mapBoxToken);

const App = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/driftrbase-logo-png.png')}
        style={styles.logo} 
      />
      <MapView style={styles.map} />
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
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  map: {
    flex: 1
  }
});
