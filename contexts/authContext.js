import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [authStatus, setAuthStatus] = useState({
    isAuth: true,
    textError: 'Maaf anda belum login',
  });

  const toggleAuth = () => {
    const newAuth = !authStatus.isAuth;
    setAuthStatus({...authStatus, isAuth: newAuth});
  };

  return (
    <AuthContext.Provider value={{...authStatus, toggleAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
