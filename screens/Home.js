import React from 'react';

import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import image1 from '../assets/images/ph1.jpg';
import image2 from '../assets/images/ph2.jpg';
import image3 from '../assets/images/ph3.jpg';
import bgImg from '../assets/images/benjamin-suter-chicago-unsplash.jpg';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/FontAwesome5';

let isDarkMode;
const win = Dimensions.get('window');
const ratio = win.width / 541;

const BirthdayPack = () => {
  return (
    <View style={styles.productOption}>
      <TouchableOpacity
        onPress={() => {
          alert('you chosen bachelorette party');
        }}>
        <ImageBackground style={styles.productImage} source={image1}>
          <Text style={styles.productText}>Birthday Package</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const BacheloretteParty = () => {
  return (
    <View style={styles.productOption}>
      <TouchableOpacity
        onPress={() => {
          alert('you chosen bachelorette party');
        }}>
        <ImageBackground style={styles.productImage} source={image2}>
          <Text style={styles.productText}>Bachelorette Party</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const SurpriseParty = () => {
  return (
    <View style={styles.productOption}>
      <TouchableOpacity
        onPress={() => {
          alert('you chosen surprise party');
        }}>
        <ImageBackground style={styles.productImage} source={image3}>
          <Text style={styles.productText}>Surprise Birthday Party</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const Home = () => {
  isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View style={styles.bg}>
      {/* <ScrollView contentContainerStyle={{flexGrow: 1}} scrol> */}
      <ImageBackground style={styles.bgImage} source={bgImg}>
        {/* <View style={styles.container}> */}
        <ScrollView contentContainerStyle={{flexGrow: 1}} scrol>
          <Text style={styles.headerText}>
            Welcome To Chicago Nightlife Experience
            {/* <BirthdayPack />
            <BacheloretteParty />
            <SurpriseParty /> */}
          </Text>
        </ScrollView>
        {/* </View> */}
      </ImageBackground>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#0f0f0f',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    left: 0,
    right: 0,
    paddingBottom: 180,
    backgroundColor: '#0f0f0f',
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
    // color: 'gray',
  },
  productImage: {
    alignSelf: 'stretch',
    width: win.width,
    height: 320 * ratio,
  },
  bgImage: {
    alignSelf: 'center',
    width: win.width,
    height: win.height,
  },
  headerText: {
    position: 'relative',
    fontSize: 40,
    fontWeight: 'bold',
    // alignItems: 'center',
    top: '10%',
    textAlign: 'left',
    color: 'tomato',
    opacity: 0.83,
    marginHorizontal: 20,
  },
});

export default Home;
