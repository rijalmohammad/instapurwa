import React from 'react';
import {View, Text, Button, Animated, Easing, Image} from 'react-native';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.spin();
  }

  spin() {
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
    }).start();
  }

  render() {
    const spin = this.spinValue.interpolate({
      //interpolation map inputrange to outputrange
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <View>
        <Text>Ini About</Text>
        <Animated.Image
          style={{width: 227, height: 200, transform: [{rotate: spin}]}}
          source={{
            uri:
              'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
          }}
        />
        <Button title="Back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

export default About;
