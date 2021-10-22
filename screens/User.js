import React, {Component} from 'react';
import {View, Text, StyleSheet, useColorScheme, Modal} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Auth} from 'aws-amplify';

let isDarkMode;
let state;

async function signOut() {
  try {
    await Auth.signOut();
    updateAuthState('loggedOut');
  } catch (error) {
    console.log('Error signing out: ', error);
  }
}

async function test() {
  try {
    let userInfo = await Auth.currentUserInfo();
    console.log(userInfo);
  } catch (error) {
    console.log('Error: ', error);
  }
}

const User = () => {
  isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.headerProfile}>
            <Icons
              name="user"
              size={80}
              color={isDarkMode ? Colors.darker : Colors.lighter}
              style={styles.profileImg}></Icons>
            <TouchableHighlight style={styles.editBtn}>
              <Icons
                name="user-edit"
                size={20}
                color={isDarkMode ? Colors.darker : Colors.lighter}
                onPress={test}
              />
            </TouchableHighlight>
            <Text
              style={styles.title}
              color={isDarkMode ? Colors.darker : Colors.lighter}>
              Jordan Martinez
            </Text>
          </View>
        </View>
        <TouchableHighlight
          style={styles.logOutBtn}
          color="red"
          onPress={signOut}>
          <Icons name="power-off" size={60} color="red" />
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  headerProfile: {
    position: 'absolute',
    backgroundColor: 'tomato',
    left: 16,
    right: 16,
    borderRadius: 16,
    elevation: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  title: {
    position: 'relative',
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 120,
    alignSelf: 'center',
  },
  profileImg: {
    position: 'absolute',
    top: 12,
    alignSelf: 'center',
  },
  editBtn: {
    position: 'absolute',
    alignSelf: 'center',
    top: 8,
    right: 4,
  },
  logOutBtn: {
    position: 'relative',
    alignSelf: 'center',
    top: '800%',
  },
});

export default User;
