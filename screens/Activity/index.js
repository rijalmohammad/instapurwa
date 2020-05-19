import React, {useState, useEffect, useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {ThemeContext} from '../../contexts/themeContext';
import {AuthContext} from '../../contexts/authContext';

// class Activity extends React.Component {
//   static contextType = ThemeContext;

//   render() {
//     const {isDarkMode} = this.context;
//     const darkText = isDarkMode ? 'Ini Dark' : 'Tidak Dark';
//     return (
//       <View>
//         <Text>{darkText}</Text>
//       </View>
//     );
//   }
// }

// const Activity = () => {
//   const [clicked, setClicked] = useState(false);
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     if (clicked) setCounter(1);
//     else setCounter(0);
//   }, [clicked]);

//   return (
//     <ThemeContext.Consumer>
//       {value => (
//         <View
//           style={{
//             backgroundColor: value.isDarkMode
//               ? value.dark.background
//               : value.light.background,
//           }}>
//           <Text
//             style={{
//               color: value.isDarkMode ? value.dark.color : value.light.color,
//             }}>
//             {value.isDarkMode ? 'Ini Dark' : 'Light'}
//           </Text>
//           <Text
//             style={{
//               color: value.isDarkMode ? value.dark.color : value.light.color,
//             }}>
//             {String(counter)}
//           </Text>
//           <Button
//             title="Toggle Theme"
//             onPress={() => {
//               setClicked(!clicked);
//             }}
//           />
//         </View>
//       )}
//     </ThemeContext.Consumer>
//   );
// };

const Activity = () => {
  const value = useContext(ThemeContext);
  const authValue = useContext(AuthContext);

  return authValue.isAuth ? (
    <View
      style={{
        backgroundColor: value.isDarkMode
          ? value.dark.background
          : value.light.background,
      }}>
      <Text
        style={{
          color: value.isDarkMode ? value.dark.color : value.light.color,
        }}>
        {value.isDarkMode ? 'Ini Dark' : 'Light'}
      </Text>
      <Button
        title="Toggle Theme"
        onPress={() => {
          value.toggleTheme();
        }}
      />
    </View>
  ) : (
    <View>
      <Text>{authValue.textError}</Text>
    </View>
  );
};

export default Activity;
