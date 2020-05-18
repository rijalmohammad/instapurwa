import React from 'react';
import {View, Text, Button} from 'react-native';

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Ini News</Text>
        <Button
          title="Ke About"
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    );
  }
}

export default News;
