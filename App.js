/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; -> for expo

import Home from './screens/Home'; // -> /Home/index.js
import Explore from './screens/Explore';
import Add from './screens/Add';
import Activity from './screens/Activity';
import Profile from './screens/Profile';

// import About from './screens/About';
// import News from './screens/News';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Explore') {
                iconName = focused ? 'md-search' : 'ios-search';

                return <Ionicons name={iconName} size={size} color={color} />;
              } else if (route.name === 'Add') {
                iconName = focused
                  ? 'ios-add-circle'
                  : 'ios-add-circle-outline';
                return <Ionicons name={iconName} size={size} color={color} />;
              } else if (route.name === 'Activity') {
                iconName = focused ? 'heart' : 'heart-outline';
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Profile') {
                iconName = focused
                  ? 'account-circle'
                  : 'account-circle-outline';
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={size}
                    color={color}
                  />
                );
              }

              // You can return any component that you like here!
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'black',
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Add" component={Add} />
          <Tab.Screen name="Activity" component={Activity} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
