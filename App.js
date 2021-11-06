/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  ImageBackground,
  Button,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import Main from './screens/Main';
import chicagoImg from './assets/images/chicago-nightlife.jpeg';
import {
  withAuthenticator,
  AmplifyTheme,
  Authenticator,
  withOAuth,
} from 'aws-amplify-react-native';
import Amplify, {Auth} from 'aws-amplify';
import {Hub} from '@aws-amplify/core';
import config from './src/aws-exports';
import {CustomAmplifyTheme} from './screens/CustomAmplifyTheme';
import {CognitoUser} from 'amazon-cognito-identity-js';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import urlOpener from './screens/UrlOpener';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {NativeModules} from 'react-native';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';

if (__DEV__) {
  NativeModules.DevSettings.setIsDebuggingRemotely(true);
}

Amplify.configure({
  ...config,
  oauth: {
    ...config.oauth,
    urlOpener,
  },
});

let isDarkMode;

class App extends React.Component {
  state = {
    user: null,
    customState: null,
    authenticated: false,
    authState: '',
    showFederated: true,
  };

  // AuthScreens = props => {
  //   console.log(props.authState);
  //   switch (props.authState) {
  //   }
  // };

  render() {
    if (this.state.authState === 'signedIn') {
      return <Main />;
    }

    return (
      <ActionSheetProvider>
        <View style={{flex: 1}}>
          {this.state.authState === 'signedIn' ? (
            <Main />
          ) : (
            <Authenticator
              usernameAttributes="email"
              signUpConfig={signUpConfig}
              theme={CustomAmplifyTheme}
              authState="signIn"
              authData={CognitoUser | 'username'}
              onStateChange={authState =>
                this.setState({
                  authState: authState,
                  showFederated:
                    authState === 'signIn' || authState === 'signUp',
                })
              }>
              {this.state.showFederated && (
                <View style={styles.federatedLogIn}>
                  <TouchableOpacity style={styles.federatedOptions}>
                    <Icons
                      color={Colors.lighter}
                      name="google"
                      size={40}
                      style={{paddingBottom: 10}}
                      onPress={() => {
                        Auth.federatedSignIn({provider: 'Google'});
                      }}
                    />

                    <Text style={{color: Colors.lighter}}>
                      Log in with Google
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.federatedOptions}>
                    <Icons
                      color={Colors.lighter}
                      name="facebook"
                      size={40}
                      style={{paddingBottom: 10}}
                      onPress={() => {
                        Auth.federatedSignIn({provider: 'Facebook'});
                      }}
                    />
                    <Text style={{color: Colors.lighter}}>
                      Log in with Facebook
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Authenticator>
          )}
        </View>
      </ActionSheetProvider>
    );
  }

  componentDidMount() {
    Linking.getInitialURL()
      .then(url => {
        console.log('get initial url');
        if (url) {
          Alert.alert('GET INIT URL', `initial url  ${url}`);
          console.log('GET INIT URL', `initial url  ${url}`);
        }
      })
      .catch(e => {});

    // Linking.addEventListener('url', this.appWokeUp);
  }

  componentWillUnmount() {
    Linking.addEventListener('url', this.appWokeUp).remove();
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
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string',
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password',
    },
    // {
    //   label: 'PhoneNumber',
    //   key: 'phone_number',
    //   require: true,
    //   displayOrder: 3,
    //   type: 'string',
    // },
  ],
};

const styles = StyleSheet.create({
  federatedOptions: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  federatedLogIn: {
    paddingTop: 60,
    marginBottom: 100,
  },
});

export * from './screens/CustomAmplifyTheme';
export default App;
