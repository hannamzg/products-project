import NavBar from "../components/navBar"
import { AuthContext } from "../context/authContext";
import { useContext, useState } from "react";
import AddProductBtn from "../components/addProductBtn.jsx"
import AddProductForm from "../components/addProductForm" 
import ProductSlider from '../components/ProductSlider';
import {Navigate} from "react-router-dom";
import EditProduct from "../components/editProduct";



function MainPage() { 
    const [openUl,setOpenUl]=useState(false);
    const [openAddProcdut,setOpenAddProcdut]=useState(false);
    const [openEditProduct,setOpenEditProduct]=useState(false);
    const [productChange,setProductChange]=useState(false)  
    const [editValues,setEditValues]=useState({})
    const {currentUser}= useContext(AuthContext);

    if(!currentUser||currentUser==null){
        return <Navigate to="/"/>
    }
   
   
    return(
    <div onClick={()=> openUl&&setOpenUl(false)} >
        <NavBar arr={currentUser} setOpenUl={setOpenUl} openUl={openUl}/>
        <AddProductBtn setOpenAddProcdut={setOpenAddProcdut}/>
        {openAddProcdut ?<AddProductForm  setOpenAddProcdut={setOpenAddProcdut} setProductChange={setProductChange} />:""}
        <ProductSlider 
        setOpenEditProduct={setOpenEditProduct} 
        setEditValues={setEditValues}  
        productChange={productChange}
        setProductChange={setProductChange}      
         />
       {openEditProduct && <EditProduct setProductChange={setProductChange} setOpenEditProduct={setOpenEditProduct} editValues={editValues}/>}
    </div>
    ) 
}

export default MainPage