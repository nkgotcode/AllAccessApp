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
import {
  withAuthenticator,
  AmplifyTheme,
  Authenticator,
} from 'aws-amplify-react-native';
import Amplify, {Auth} from 'aws-amplify';
// import {withAuthenticator} from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/node_modules/@aws-amplify/ui/dist/styles.css';
import config from './src/aws-exports';
import CustomAmplifyTheme from './screens/CustomAmplifyTheme';
import {CognitoUser} from 'amazon-cognito-identity-js';

Amplify.configure(config);
let isDarkMode;

function App({user}) {
  isDarkMode = useColorScheme() === 'dark';
  CustomAmplifyTheme.container.backgroundColor = backgroundStyle;
  return (
    // <Authenticator
    //   usernameAttributes="Email"
    //   signUpConfig={signUpConfig}
    //   theme={CustomAmplifyTheme}
    //   authState="signIn"
    //   authData={CognitoUser | 'username'}
    //   onStateChange={authState => handleAuthStateChange}></Authenticator>
    <Main></Main>
  );
}

function handleAuthStateChange(state) {
  if (state === 'signedIn') {
    console.log('signed In');
  }
}

const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

const MySectionHeader = Object.assign({}, AmplifyTheme.sectionHeader, {
  backgroundColor: 'tomato',
});
const MyTheme = Object.assign({}, CustomAmplifyTheme, {
  sectionHeader: MySectionHeader,
});

const signUpConfig = {
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    // {
    //   label: 'Username',
    //   key: 'username',
    //   required: true,
    //   displayOrder: 1,
    //   type: 'string',
    // },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'password',
    },
    // {
    //   label: 'PhoneNumber',
    //   key: 'phone_number',
    //   require: true,
    //   displayOrder: 4,
    //   type: 'string',
    // },
  ],
};
const usernameAttributes = 'Email';

export * from './screens/CustomAmplifyTheme';
export default App;
