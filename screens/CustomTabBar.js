import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import Home from './Home';
import Explore from './Explore';
import User from './User';
import Icons from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const CustomTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Group
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.darker,
            position: 'absolute',
            bottom: 20,
            height: 60,
            borderRadius: 48,
            marginHorizontal: 30,
            shadowColor: '#000',
            shadowOpacity: 0.06,
            shadowOffset: {
              width: 10,
              height: 10,
            },
            borderTopWidth: 0,
            alignContent: 'center',
          },
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused, tintColor}) => (
              <Icons
                style={{position: 'absolute', alignSelf: 'center', top: '50%'}}
                name="home"
                size={30}
                color={focused ? 'tomato' : 'gray'}
              />
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}></Tab.Screen>
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({focused, tintColor}) => (
              <Icons
                style={{position: 'absolute', alignSelf: 'center', top: '50%'}}
                name="wpexplorer"
                size={30}
                color={focused ? 'tomato' : 'gray'}
              />
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}></Tab.Screen>
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({focused, tintColor}) => (
              <Icons
                style={{position: 'absolute', alignSelf: 'center', top: '50%'}}
                name="user"
                size={30}
                color={focused ? 'tomato' : 'gray'}
              />
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          }}></Tab.Screen>
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default CustomTabBar;
