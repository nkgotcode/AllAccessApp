import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import CustomTabBar from './CustomTabBar';
import {AmplifyProvider} from '@aws-amplify/ui-react';

let isDarkMode;
const win = Dimensions.get('window');
const ratio = win.width / 541;

const Main = () => {
  isDarkMode = useColorScheme() === 'dark';
  return (
    // <AmplifyProvider>
    <NavigationContainer>
      <CustomTabBar />
    </NavigationContainer>
    /* </AmplifyProvider> */
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

export default Main;
