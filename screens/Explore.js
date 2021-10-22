import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

// downtown Chicago coordinates
const LATITUDE = 41.881832;
const LONGITUDE = -87.623177;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#212121',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2c2c2c',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#8a8a8a',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c',
      },
    ],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d',
      },
    ],
  },
];

const Explore = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Explore</Text> */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        showsUserLocation={true}>
        <Marker
          coordinate={{
            latitude: 41.89673561896854,
            longitude: -87.63685116253356,
          }}
          pinColor={'#ff6347'}
          title={'Bounce Sporting Club'}
          description={'324 W Chicago Ave, Chicago, IL 60654'}
        />
        <Marker
          coordinate={{
            latitude: 41.89876513667679,
            longitude: -87.63710770529362,
          }}
          pinColor={'#ff6347'}
          title={'LiqrBox'}
          description={'873 N Orleans St, Chicago, IL 60610'}
        />
        <Marker
          coordinate={{
            latitude: 41.89334423840937,
            longitude: -87.6348608727683,
          }}
          pinColor={'#ff6347'}
          title={'Electric Hotel'}
          description={'222 W Ontario St, Chicago, IL 60654'}
        />
        <Marker
          coordinate={{
            latitude: 41.88918394436052,
            longitude: -87.63307230160338,
          }}
          pinColor={'#ff6347'}
          title={'Tunnel'}
          description={'151 W Kinzie St, Chicago, IL 60654'}
        />
        <Marker
          coordinate={{
            latitude: 41.894208438085364,
            longitude: -87.63637537276826,
          }}
          pinColor={'#ff6347'}
          title={'Clutch bar Chicago'}
          description={'316 W Erie St, Chicago, IL 60654'}
        />
        <Marker
          coordinate={{
            latitude: 41.89032902085935,
            longitude: -87.63176347276834,
          }}
          pinColor={'#ff6347'}
          title={'Joy District Chicago'}
          description={'112 W Hubbard St 2nd & 3rd floor, Chicago, IL 60654'}
        />
        <Marker
          coordinate={{
            latitude: 41.89030692865993,
            longitude: -87.63160767276833,
          }}
          pinColor={'#ff6347'}
          title={'Hubbard Inn'}
          description={'110 W Hubbard St, Chicago, IL 60654'}
        />
        <Marker
          coordinate={{
            latitude: 41.88992022147279,
            longitude: -87.62910823043842,
          }}
          pinColor={'#ff6347'}
          title={'ROCBAR'}
          description={'25 W Hubbard St, Chicago, IL 60654'}
        />
        <Marker
          coordinate={{
            latitude: 41.889155709584585,
            longitude: -87.63302020160336,
          }}
          pinColor={'#ff6347'}
          title={'Tree House'}
          description={'149 W Kinzie St, Chicago, IL 60654'}
        />
        <Marker
          coordinate={{
            latitude: 41.89111308692897,
            longitude: -87.63011118626322,
          }}
          pinColor={'#ff6347'}
          title={'Underground'}
          description={'56 W Illinois St, Chicago, IL 60654'}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
});

// export default class App extends Component<Props>
// {  render() {
//   return (
//     MapView style={{flex: 1}} region={{ latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} showsUserLocation={true} />
//     );}
// }
export default Explore;
