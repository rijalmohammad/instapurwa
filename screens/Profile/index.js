import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Person from './Person';
import Edit from './Edit';

const Stack = createStackNavigator();

class Profile extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Person">
        <Stack.Screen name="Person" component={Person} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    );
  }
}

export default Profile;
