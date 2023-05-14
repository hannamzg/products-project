import appStyle from "./styles/App.module.scss";
import MainPage from "./pages/mainPage";
import NavBar from "./components/navBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ProductPage from "./pages/productPage"
import Cart from './pages/cart'
import MyComponent from './test'

function App() {
  const [openSettings,setOpenSettings]=useState(false);
 
  return (
    <div className={appStyle.App} onClick={()=> openSettings&&setOpenSettings(false)}>
      
    <NavBar openSettings={openSettings} setOpenSettings={setOpenSettings}/>
      <ToastContainer />
      <Routes>
        <Route path="/"element={ <MainPage /> }/>
        <Route path="/productPage/:id"element={ <ProductPage /> }/>
        <Route path="/cart"element={ <Cart /> }/>
      </Routes>  
      <MyComponent/> 
    </div>

  );
}

export default App;
