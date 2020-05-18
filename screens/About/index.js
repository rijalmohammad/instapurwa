import React from 'react';
import {View, Text, Button} from 'react-native';

class About extends React.Component {
  render() {
    return (
      <View>
        <Text>Ini About</Text>
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

export default About;
