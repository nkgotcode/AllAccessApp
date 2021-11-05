import React, {Component} from 'react';
import {InternalApp} from './InternalApp';
import {CustomSignIn} from './SignIn';
import {Main} from './Main';
import {Authenticator} from 'aws-amplify-react-native';
import CustomAmplifyTheme from './CustomAmplifyTheme';
import config from '../src/aws-exports';
import urlOpener from './UrlOpener';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

class AuthWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.updateUsername = this.updateUsername.bind(this);
  }

  updateUsername(newUsername) {
    this.setState({username: newUsername});
  }

  render() {
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
    const awsconfig = {
      ...config,
      oauth: {
        ...config.oauth,
        urlOpener,
      },
    };

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
    return (
      //   <div className="flex-1">
      <View style={{flex: 1}}>
        <Authenticator
          AmplifyConfig={awsconfig}
          usernameAttributes="Email"
          signUpConfig={signUpConfig}
          theme={CustomAmplifyTheme}
          authState="signIn"
          authData={CognitoUser | 'username'}
          onStateChange={authState => console.log(authState)}>
          <View style={styles.federatedLogIn}>
            <TouchableOpacity style={styles.federatedOptions}>
              <Icons
                color={Colors.lighter}
                name="google"
                size={40}
                style={{paddingBottom: 10}}
                onPress={() => {
                  Auth.federatedSignIn({provider: 'Google'});
                  this._validAuthStates = ['confirmSignIn'];
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
                  this._validAuthStates = ['confirmSignIn'];
                }}
              />
              <Text style={{color: Colors.lighter}}>Log in with Facebook</Text>
              {/* {authState === 'signedIn' && <Main />} */}
            </TouchableOpacity>
          </View>
        </Authenticator>
        <Main
          authState={this.props.authState}
          onStateChange={this.props.onStateChange}
        />
      </View>
      /* </div> */
    );
  }
}

export default AuthWrapper;
