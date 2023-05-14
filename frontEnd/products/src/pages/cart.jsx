import cartStyle from "../styles/cart.module.scss"
import {getCartProducts} from '../serves/getCartProducts'
import { useEffect, useState } from "react";
import { useContext } from "react";
import {AuthContext} from '../context/authContext';
import {DeleteCartProduct} from '../serves/DeleteCartProduct';
import{ProductsManger} from '../context/productsManger'

function Cart() {
  const {currentUser } =useContext(AuthContext);
  const [hasChange,setHasChange]=useState(false)
  const [products,setProducts]=useState();
  const [fullPrice,setFullPrice]=useState(0)
  const {setAddToCartInfoChange } =useContext(ProductsManger);

  useEffect(()=>{
    try{
      getCartProducts(currentUser.id).then((data)=>{
        setProducts(data)
        setHasChange(false) 
        setFullPriceFun(data)
      }).catch((err)=>{
        console.log(err);
      })
    }
    catch(err){
      console.log(err);
    } 
   

},[hasChange])

 function setFullPriceFun(products) {
  if (products) {
    let sum=0;
    for(let i=0; i<products.data.length; i++){
      sum += Number (products.data[i].price)
      setFullPrice(sum)    
      
    }   
  }
   
}


  function handleDeleteCartProduct(cartId) {
    try{
      DeleteCartProduct(cartId).then(()=>{
        setAddToCartInfoChange(true)
        setHasChange(true)
     }).catch((err)=>{
        console.log(err);
     })
    }
    catch(err){
      console.log(err);
    }
    
  }

  return (
  <div className={cartStyle.body}>
      <h1 className={cartStyle.title}>Cart</h1>
      <div className={cartStyle.items}>
        {products&&products.data.length !== 0?products.data.map((data,index)=>{
           return <div className={cartStyle.item} key={index}>
            <img src={"http://localhost:5000/" + data.photo} alt="" className={cartStyle.img}/>
            <div className={cartStyle.divHaveDicAndDelet}>
              <div style={{display:"flex"}}>
                <div className={cartStyle.itemsDiv}>
                  <div>name</div>
                  <h3 className={cartStyle.itemName}>{data.name}</h3>
                </div>
                <div className={cartStyle.itemsDiv}>
                  <div>price</div>
                  <h3 className={cartStyle.itemPrice}>{data.price}</h3>
                </div>
              </div>
              <div className={cartStyle.delete} onClick={()=>handleDeleteCartProduct(data.cartId)}>
                <i  className="bi bi-trash3-fill"></i>
              </div>
            </div>
          </div>
        }):
        <>
        <h1 className={cartStyle.notingInCart}>noting in the cart </h1>
        <div className={cartStyle.customLoader}></div>
        </>}
      </div>
     {products&&products.data.length !== 0&& <div className={cartStyle.DivToBuy}>
        <h4>full price :{fullPrice} </h4>
        <button type="button" class="btn btn-primary">buy</button>
        
      </div>}
  </div> 
  );
}

export default Cart;
