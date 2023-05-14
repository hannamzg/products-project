import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();
//export const IsSignedIn = token != null && token != ""

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("adminUser")) 
  ); 

  const login =  async(inputs) => {
    const res = await axios.post("http://localhost:5000/api/auth/login",inputs,{
      withCredentials:true
    });
    setCurrentUser(res.data);   
  };


  useEffect(() => {
    localStorage.setItem("adminUser", JSON.stringify(currentUser));
  }, [currentUser]);  
 
  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
