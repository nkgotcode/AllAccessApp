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

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import CustomTabBar from './screens/CustomTabBar';

const BottomTab = createBottomTabNavigator();
let isDarkMode;
const win = Dimensions.get('window');
const ratio = win.width / 541;

const App: () => Node = () => {
  isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <Home></Home>
    <NavigationContainer>
      <CustomTabBar />
    </NavigationContainer>
    // <View style={{flex: 1}}>
    //   <ImageBackground
    //     style={{
    //       //   width: '100%',
    //       //   height: '100%',
    //       flex: 1,
    //     }}
    //     imageStyle={{resizeMode: 'cover'}}
    //     source={chicagoImg}>
    //     <SwipeRecognizer style={{flex: 1}}>
    //       <Text
    //         style={{
    //           position: 'absolute',
    //           fontSize: 40,
    //           fontWeight: 'bold',
    //           alignItems: 'center',
    //           justifyContent: 'center',
    //           left: 2,
    //           right: 2,
    //           bottom: 120,
    //           textAlign: 'center',
    //           color: '#FFFFFF',
    //         }}>
    //         Welcome To Chicago Nightlife Experience
    //       </Text>
    //       <Icons
    //         style={{position: 'absolute', bottom: 16, alignSelf: 'center'}}
    //         name="chevron-down"
    //         size={50}
    //         color="white"
    //       />
    //     </SwipeRecognizer>
    //   </ImageBackground>
    // </View>

    /* <Header /> */
    /* <HomeScreenHeader /> */
    /* <BirthdayPack />
        <BacheloretteParty />
        <SurpriseParty /> */
    // </ScrollView>
    /* <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            tabBarStyle: { position: 'absolute', backgroundColor: {backgroundStyle} },
          }}>
              <BottomTab.Screen name="Home" component={Home} 
              option={{ tabBarIcon: MdHome}} />
              <BottomTab.Screen name="Explore" component={Explore} />
        </BottomTab.Navigator>
      </NavigationContainer> */
    // </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    position: 'absolute',
    fontSize: 40,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    left: 2,
    right: 2,
    bottom: 120,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    alignItems: 'center',
  },
  productOption: {
    position: 'relative',
    alignItems: 'center',
    // paddingTop: 12,
    paddingBottom: 12,
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
  contentContainer: {
    paddingBottom: 24,
  },
});

export default App;
