import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icons from 'react-native-vector-icons/FontAwesome5';

const User = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentContainer}>
          <Icons
            name="user"
            size={30}
            color="tomato"
            style={styles.profileImg}></Icons>
          <Text style={styles.title}>Jordan Martinez</Text>
        </View>
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
  title: {
    position: 'relative',
    fontSize: 24,
    fontWeight: '600',
    color: 'tomato',
    paddingTop: 60,
  },
  profileImg: {
    position: 'absolute',
    top: 12,
  },
});

export default User;
