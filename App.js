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
// import {withAuthenticator} from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/node_modules/@aws-amplify/ui/dist/styles.css';
import config from './src/aws-exports';
import CustomAmplifyTheme from './screens/CustomAmplifyTheme';
import {CognitoUser} from 'amazon-cognito-identity-js';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import urlOpener from './screens/UrlOpener';
import Icons from 'react-native-vector-icons/FontAwesome5';

Amplify.configure({
  ...config,
  oauth: {
    ...config.oauth,
    urlOpener,
  },
});
// Amplify.configure(config);

let isDarkMode;

const AuthScreens = props => {
  console.log(props.authState);
  switch (props.authState) {
    case 'signedIn':
      return <Main />;
    default:
      return <></>;
  }
};

class App extends React.Component {
  state = {
    authenticated: false,
  };

  render() {
    if (this.state.authenticated) {
      return <Main />;
    }
    return (
      <View style={{flex: 1}}>
        {this.state.authenticated ? (
          <Main />
        ) : (
          <Authenticator
            usernameAttributes="Email"
            signUpConfig={signUpConfig}
            theme={CustomAmplifyTheme}
            authState="signIn"
            authData={CognitoUser | 'username'}
            onStateChange={authState => AuthScreens}>
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
                <Text style={{color: Colors.lighter}}>Log in with Google</Text>
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
          </Authenticator>
        )}
      </View>
    );

    async function handleAuthStateChange() {
      const user = await Auth.currentAuthenticatedUser().catch(err =>
        console.log(err),
      );
      if (user != null) {
        this.state.authenticated = true;
      }
    }
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

    Linking.addEventListener('url', this.appWokeUp);
  }

  componentWillUnmount() {
    Linking.addEventListener('url', this.appWokeUp).remove();
  }
}

handleAuth = ({payload}) => {
  switch (payload.event) {
    case 'parsingCallBackUrl':
      if (payback.data.url) {
        let urls = payload.data.url.split('?');
        if (urls[0] === 'allaccessapp://') {
          InAppBrowser.close();
        } else if (urls[0] === 'allaccessapp://') {
          InAppBrowser.close();
        }
      }
      break;
    case 'signOut':
      InAppBrowser.close();
      setAuthWaiting(false);
      break;
  }
};

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

const styles = StyleSheet.create({
  federatedOptions: {
    alignItems: 'center',
    paddingBottom: 16,
  },
  federatedLogIn: {
    paddingTop: 20,
    marginBottom: 200,
  },
});

export * from './screens/CustomAmplifyTheme';
export default withOAuth(App);
