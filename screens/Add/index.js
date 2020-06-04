import React from 'react';
import {View, Text, Button, Animated, Easing, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

class Add extends React.Component {
  constructor(props) {
    super(props);

    this.spinValue = new Animated.Value(0);
    this.springValue = new Animated.Value(0.3);
    this.decayValue = new Animated.Value(1);
  }

  // componentDidMount() {
  //   this.spin();
  // }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => this.spin());
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(this.springValue, {
      toValue: 1,
      duration: 2000,
      tension: 20,
      friction: 1,
      useNativeDriver: false,
    }).start();
  }

  spinSpring() {
    this.spinValue.setValue(0);
    this.springValue.setValue(0);

    const springAn = Animated.spring(this.springValue, {
      toValue: 1,
      duration: 2000,
      tension: 20,
      friction: 1,
      useNativeDriver: false,
    });

    const spinAn = Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false,
    });

    Animated.stagger(50, [springAn, spinAn]).start();
  }

  decay() {
    this.decayValue.setValue(1);
    Animated.decay(this.decayValue, {
      velocity: 1, //initial velocity
      deceleration: 0.996, // default 0.997
      useNativeDriver: false,
    }).start();
  }

  render() {
    const spin = this.spinValue.interpolate({
      //interpolation map inputrange to outputrange
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '-90deg', '360deg'],
    });

    // const size = this.spinValue.interpolate({
    //   //interpolation map inputrange to outputrange
    //   inputRange: [0, 0.5, 1],
    //   outputRange: [100, 1000, 100],
    // });

    const color = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['white', 'black'],
    });

    // const decaying = this.decayValue.interpolate({
    //   inputRange: [0, 2],
    //   outputRange: [10, 100],
    // });

    return (
      <View>
        <Button
          onPress={() => this.spinSpring()}
          title="Click to spin + spring"
        />
        <Animatable.View
          animation="flash"
          easing="ease-in"
          direction="alternate"
          iterationCount={4}
          onAnimationEnd={() => this.spinSpring()}
          style={{textAlign: 'center'}}>
          <Text>Jello</Text>
        </Animatable.View>
        <Animated.Image
          style={{
            backgroundColor: color,
            width: 100,
            height: 100,
            transform: [{rotate: spin}, {scale: this.springValue}],
          }}
          source={{
            uri:
              'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
          }}
        />
        {/* <Animated.Image
          style={{
            width: 100,
            height: 100,
            transform: [{scale: this.springValue}],
          }}
          source={{
            uri:
              'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
          }}
        /> */}
        <Animated.Image
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'black',
            transform: [{translateY: this.decayValue}],
          }}
          source={{
            uri:
              'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
          }}
        />
      </View>
    );
  }
}

export default Add;
