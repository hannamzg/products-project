import { createContext, useEffect, useState } from "react";

export const ProductsManger = createContext();

export const AuthProducts = ({ children }) => {
  const [addToCartInfoChange,setAddToCartInfoChange]=useState(false);
  
  return (
    <ProductsManger.Provider value={{addToCartInfoChange, setAddToCartInfoChange}}>
      {children}
    </ProductsManger.Provider>
  );
};
