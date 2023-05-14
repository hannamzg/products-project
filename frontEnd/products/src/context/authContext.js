import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("UsersProduct")) 
  ); 

  const login =  async(inputs) => {
    const res = await axios.post("http://localhost:5000/api/authUsers/login",inputs,{
      withCredentials:true
    });
    setCurrentUser(res.data);   
  };


  useEffect(() => {
    localStorage.setItem("UsersProduct", JSON.stringify(currentUser));
  }, [currentUser]); 


  function logOut() {
    fetch("http://localhost:5000/api/authUsers/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((response) => {
        console.log(response); 
        setCurrentUser("");
      })
      .catch((error) => {
        console.log(error);
      });
   
    localStorage.removeItem("UsersProduct");
  }
  
  return (
    <AuthContext.Provider value={{ currentUser, login ,logOut}}>
      {children}
    </AuthContext.Provider>
  );
};
