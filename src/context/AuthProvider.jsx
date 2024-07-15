import React, { createContext, useReducer, useEffect } from 'react';
import axios from "axios";


const AuthContext = createContext();

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "Loggedin":
      return { token: action.payload };
    case "Logout":
      return { token: null };
    default:
      return state;
  }
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, {token:null})

  // useEffect(()=>{
  //   if(token) {
  //     dispatch({type:'Loggedin', payload:token})
  //   }
  // }, [])

  console.log('auth state', state)
  
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;