import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

const Add = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [spinValue]);

  const spinInter = spinValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '-90deg', '360deg'],
  });

  return (
    <Animated.Image
      style={{
        width: 100,
        height: 100,
        transform: [{rotate: spinInter}],
      }}
      source={{
        uri:
          'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
      }}
    />
  );
};

export default Add;
