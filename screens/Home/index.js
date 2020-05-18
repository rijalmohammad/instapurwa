import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Timeline from './Timeline';
import Message from './Message';

const Stack = createStackNavigator();

class Home extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Timeline">
        <Stack.Screen name="Timeline" component={Timeline} />
        <Stack.Screen name="Message" component={Message} />
      </Stack.Navigator>
    );
  }
}

export default Home;
