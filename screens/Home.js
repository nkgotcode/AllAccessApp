import React from 'react';

import {
  Animated,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

import image1 from '../assets/images/ph1.jpg';
import image2 from '../assets/images/ph2.jpg';
import image3 from '../assets/images/ph3.jpg';
import chicagoImg from '../assets/images/chicago-nightlife.jpeg';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/FontAwesome5';

let isDarkMode;
const win = Dimensions.get('window');
const ratio = win.width / 541;

const BirthdayPack = () => {
  return (
    <View style={styles.productOption}>
      <ImageBackground style={styles.productImage} source={image1}>
        <Text style={styles.productText}>Birthday Package</Text>
      </ImageBackground>
    </View>
  );
};

const BacheloretteParty = () => {
  return (
    <View style={styles.productOption}>
      <ImageBackground style={styles.productImage} source={image2}>
        <Text style={styles.productText}>Bachelorette Party</Text>
      </ImageBackground>
    </View>
  );
};

const SurpriseParty = () => {
  return (
    <View style={styles.productOption}>
      <ImageBackground style={styles.productImage} source={image3}>
        <Text style={styles.productText}>Surprise Birthday Party</Text>
      </ImageBackground>
    </View>
  );
};

const Home = () => {
  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      imageStyle={{resizeMode: 'cover'}}
      source={chicagoImg}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Text
            style={{
              position: 'relative',
              fontSize: 40,
              fontWeight: 'bold',
              alignItems: 'center',
              justifyContent: 'center',
              top: '10%',
              textAlign: 'center',
              color: '#FFFFFF',
            }}>
            Welcome To Chicago Nightlife Experience
            <BirthdayPack />
            <BacheloretteParty />
            <SurpriseParty />
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    left: 0,
    right: 0,
    paddingBottom: 150,
  },
  productOption: {
    alignItems: 'center',
    paddingTop: 40,
  },
  productText: {
    position: 'absolute',
    fontSize: 32,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    left: 16,
    right: 16,
    bottom: 2,
    color: '#FFFFFF',
  },
  productImage: {
    alignSelf: 'stretch',
    width: win.width,
    height: 320 * ratio,
  },
});

export default Home;
