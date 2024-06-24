import {createContext, useState, useContext, useMemo, useEffect, contextValue} from 'react';
import { registerRequest} from '../api/auth.js';
import axios from 'axios';

export const AuthContext = createContext();

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider ")
    }

    return context
}

export const AuthProvide = ({children}) =>{

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signup = async(user) =>{
        try{
            const res =await registerRequest(user);
            setUser(res.data)
            setIsAuthenticated(true)
        }catch(error){
            console.log(error);
        }
    }

    return(
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            contextValue
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const AuthProvider = ({ children }) => {
    // State to hold the authentication token
    const [token, setToken_] = useState(localStorage.getItem("token"));
  
    // Function to set the authentication token
    const setToken = (newToken) => {
      setToken_(newToken);
    };
  
    useEffect(() => {
      if (token) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        localStorage.setItem("token", token);
      } else {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
      }
    }, [token]);
  
    // Memoized value of the authentication context
    const contextValue = useMemo(
      () => ({
        token,
        setToken,
      }),
      [token]
    );
  
    // Provide the authentication context to the children components
    return (
      <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
  };
  
  export const useAuthe = () => {
    return useContext(AuthContext);
  };
  
  export default AuthProvider;