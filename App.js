/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import Main from './screens/Main';
import chicagoImg from './assets/images/chicago-nightlife.jpeg';
import {withAuthenticator} from 'aws-amplify-react-native';

const App = () => {
  isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ImageBackground
      style={{
        flex: 1,
      }}
      imageStyle={{resizeMode: 'cover'}}
      source={chicagoImg}></ImageBackground>
    // <Main></Main>
  );
};

export default withAuthenticator(App);
