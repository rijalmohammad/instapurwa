import React from 'react';
import {View, Text, Button} from 'react-native';

class Message extends React.Component {
  render() {
    return (
      <View>
        <Text>Ini Message</Text>
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

export default Message;
