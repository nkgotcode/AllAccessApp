/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import image1 from './assets/images/ph1.jpg'
import image2 from './assets/images/ph2.jpg'
import image3 from './assets/images/ph3.jpg'
import chicagoImg from './assets/images/chicago-nightlife.jpeg'

// import RootNavigator from './directory/TabNavigator/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Explore from './screens/Explore';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { MdExplore, MdHome } from 'react-icons/md'

const BottomTab = createBottomTabNavigator();
let isDarkMode;
const win = Dimensions.get('window');
const ratio = win.width / 541

const BirthdayPack: () => Node = () => {
  return (
    <View style={styles.productOption}>
        <ImageBackground style={styles.productImage} source={image1}>
        <Text style={styles.productText}>
          Birthday Package
        </Text>
      </ImageBackground>
    </View>
  );
}

const BacheloretteParty: () => Node = () => {
  return (
    <View style={styles.productOption}>
        <ImageBackground style={styles.productImage} source={image2}>
        <Text style={styles.productText}>
        Bachelorette Party
        </Text>
      </ImageBackground>
    </View>
  );
}

const SurpriseParty: () => Node = () => {
  return (
    <View style={styles.productOption}>
        <ImageBackground style={styles.productImage} source={image3}>
        <Text style={styles.productText}>
        Surprise Birthday Party
        </Text>
      </ImageBackground>
    </View>
  );
}

const HomeScreenHeader: () => Node = () => {
  return (
    <View screenOptions={{
      headerStyle: { position: 'absolute', top: 0, left: 0 },
    }}>
      <ImageBackground style={{width: "100%", height: 500, top: 0}} source={chicagoImg}>
        <Text style={styles.headerText}>
          Welcome To Chicago Nightlife Experience
        </Text>
      </ImageBackground>
    </View>
  );
}

const App: () => Node = () => {
  isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar translucent backgroundColor='transparent' 
                // barStyle={isDarkMode ? 'light-content' : 'dark-content'} 
      />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        contentInsetAdjustmentBehavior="scrollableAxes"
        style={backgroundStyle}>
        {/* <Header /> */}
        <HomeScreenHeader />
        <BirthdayPack />
        <BacheloretteParty />
        <SurpriseParty />
      </ScrollView>
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            tabBarStyle: { position: 'absolute', backgroundColor: {backgroundStyle} },
          }}>
              <BottomTab.Screen name="Home" component={Home} 
              option={{ tabBarIcon: MdHome}} />
              <BottomTab.Screen name="Explore" component={Explore} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    position: "absolute",
    fontSize: 40,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    left: 2, right: 2, bottom: 20, 
    textAlign: "center",
    color: "#FFFFFF",
  },
  container: {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    alignItems: "center"
  },
  productOption: {
    position: "relative",
    alignItems: "center",
    // paddingTop: 12,
    paddingBottom: 12,
  },
  productText: {
    position: "absolute",
    fontSize: 32,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    left: 16, right: 16, bottom: 2,
    color: "#FFFFFF",
  },
  productImage: {
    alignSelf: "stretch",
    width: win.width,
    height: 320 * ratio,
  },
  contentContainer: {
    paddingBottom: 24
  },
});

export default App;
