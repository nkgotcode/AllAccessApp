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
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import image1 from './assets/images/ph1.jpg'

// import RootNavigator from './directory/TabNavigator/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Explore from './screens/Explore';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { MdExplore, MdHome } from 'react-icons/md'

const BottomTab = createBottomTabNavigator();
let isDarkMode;
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const BirthdayPack: () => Node = () => {
  return (
    <View style={styles.productOption}>
      <Image style={styles.image1} source={image1} />
    </View>
  )
}

const App: () => Node = () => {
  isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        {/* <View style={styles.container}>
        </View> */}
        <BirthdayPack />
      </ScrollView>
      <NavigationContainer>
        <BottomTab.Navigator 
          screenOptions={{
            tabBarStyle: { position: 'absolute' },
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
  container: {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    alignItems: "center"
  },
  productOption: {
    width: 460,
    height: 250
  },
  image1: {
    width: 300,
    height: 150
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
