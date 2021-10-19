import React from 'react';
import {Authenticator, withAuthenticator} from 'aws-amplify-react-native';
import {Component} from 'react';
// import App from './App';
import Main from './screens/Main';
import {I18n} from 'aws-amplify';

class AppWithAuth extends Component {
  authScreenLabels = {
    en: {
      'Sign Up': 'Create new account',
      'Sign Up Account': 'Create a new account',
    },
  };

  render() {
    return <Main />;
  }
}

export default AppWithAuth;
