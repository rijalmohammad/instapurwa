import React from 'react';
import {View, Text} from 'react-native';
import {ThemeContext} from '../../contexts/themeContext';

class Explore extends React.Component {
  static contextType = ThemeContext;
  render() {
    const {isDarkMode, dark, light} = this.context;
    const exploreText = isDarkMode ? 'Explore Dark' : 'Explore Light';
    return (
      <View
        style={{
          backgroundColor: isDarkMode ? dark.background : light.background,
        }}>
        <Text
          style={{
            color: isDarkMode ? dark.color : light.color,
          }}>
          {exploreText}
        </Text>
      </View>
    );
  }
}

export default Explore;
