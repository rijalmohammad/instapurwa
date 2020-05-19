import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

// class ThemeContextProvider extends React.Component {
//   state = {
//     isDarkMode: false,
//     dark: {background: '#000', color: '#fff'},
//     light: {background: '#fff', color: '#000'},
//   };

//   render() {
//     const toggleTheme = () => {
//       const newDarkMode = !this.state.isDarkMode;
//       this.setState({isDarkMode: newDarkMode});
//     };

//     return (
//       <ThemeContext.Provider value={{...this.state, toggleTheme}}>
//         {this.props.children}
//       </ThemeContext.Provider>
//     );
//   }
// }

const ThemeContextProvider = ({children}) => {
  const [darkStatus, setIsDarkStatus] = useState({
    isDarkMode: true,
    dark: {background: '#000', color: '#fff'},
    light: {background: '#fff', color: '#000'},
  });

  const toggleTheme = () => {
    const newDarkMode = !darkStatus.isDarkMode;
    setIsDarkStatus({...darkStatus, isDarkMode: newDarkMode});
  };

  return (
    <ThemeContext.Provider value={{...darkStatus, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
