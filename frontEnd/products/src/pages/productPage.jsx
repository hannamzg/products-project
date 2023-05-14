import { useEffect, useState } from "react";
import ProductPageStyle from "../styles/ProductPage.module.scss";
import {getProductByName} from '../serves/getProductByName';
import { useParams } from "react-router-dom";
import {AddToCart} from "../serves/addToCart";
import { useContext } from "react";
import {AuthContext} from '../context/authContext';
import{ProductsManger} from '../context/productsManger'
import { toast } from "react-toastify";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import {addRating}from '../serves/addRating';
import {getTheRate}from '../serves/getTheRate'

function ProductPage() {
  const [seletedProduct,setSeletedProduct]=useState();
  const [openRateing,setOpenRateing]=useState(false);
  const {currentUser } =useContext(AuthContext);
  const {setAddToCartInfoChange } =useContext(ProductsManger);
  const [rating, setRating] = useState(0);
  const [TheRate,setTheRate]=useState(0);
  const [hasBeenRate,setHasBeenRated]=useState(false);
  const { id } = useParams();

  useEffect(()=>{    
    try{
      getProductByName(id).then((data)=>{
        setSeletedProduct(data.data[0])
      }).catch((err)=>{
        console.log(err);
      })
    }
    catch(err){
      console.log(err);
    } 
  },[id])

  useEffect(()=>{    
    try{
      getTheRate(id).then((data)=>{
        handleTheRateOfProduct(data)
        checkIfYouRateThis(data)
      }).catch((err)=>{
        console.log(err);
      })
    }
    catch(err){
      console.log(err);
    } 
  },[hasBeenRate])


  function handleTheRateOfProduct(TheRate) {
    let count =0;
    console.log(hasBeenRate);
    for (let i = 0; i < TheRate.data.length; i++) {
      let toNum=Number(TheRate.data[i].theRating);
      count+=toNum
     }
    setTheRate(count?count/TheRate.data.length:0);
  }

  function checkIfYouRateThis(TheRate) {
    for (let i = 0; i < TheRate.data.length; i++) {
     if (TheRate.data[i].userId===currentUser.id) {
      setHasBeenRated(true)
     }
    }
  }

  function handleClickAddToCart(productId) {
    try{
      AddToCart(currentUser.id,productId).then((data)=>{
      setAddToCartInfoChange(true)
      toast(data.data, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     }).catch((err)=>{
      toast(err.response.data
        , {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     })
    }
    catch(err){
      toast(err.response.data, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    
  }

  
  function handleRatingChange( newValue) {
    setRating(newValue.target.value);
  }

  function handleTheRating(){
    
    try{
      addRating(currentUser.id,seletedProduct.id,rating).then((data)=>{
        setOpenRateing(false)
        toast(data.data, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
     }).catch((err)=>{
      toast(err, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     })
    }
    catch(err){
      console.log(err);
      toast(err.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

    
  if (seletedProduct) {
  return (
    <div  className={ProductPageStyle.bigDiv} > 
        {openRateing&&<div className={ProductPageStyle.yourRateDiv}onClick={()=>setOpenRateing(false)} >
          <div className={ProductPageStyle.theRateDiv} onClick={(e) => e.stopPropagation()}>
            <div className={ProductPageStyle.closeBtn} onClick={()=>setOpenRateing(false)}>
              <i className="bi bi-x-lg"></i>
            </div>
            
            <div className={ProductPageStyle.rateHeder}>
              <i className="bi bi-star" id={ProductPageStyle.starIcon}></i> 
              <p className={ProductPageStyle.RateThis}>rate this</p>
              <p className={ProductPageStyle.nameOfProductRating}>{seletedProduct.name}</p>
            </div>

            <div className={ProductPageStyle.RateSubmit}>
                <Rating
                  name="product-rating"
                  onChange={handleRatingChange}
                  size="large"
                />
              <div className={ProductPageStyle.btnSubmit}>
                <Button variant="contained" onClick={()=>handleTheRating()}>rate this</Button>
              </div>
            </div>
          </div>
        </div>}
        <div className={ProductPageStyle.div}>
          <div>
            <img src={"http://localhost:5000/" +seletedProduct.photo}alt="" className={ProductPageStyle.image}/>
          </div>
            <div>
              <h3 className={ProductPageStyle.nameTitle}>{seletedProduct.name}</h3>
              <p className={ProductPageStyle.decripshin}>{seletedProduct.description}</p> 
                <div className={ProductPageStyle.ratingDiv}>
                  <div>
                    {TheRate}/5
                    <i className="bi bi-star-fill" style={{marginLeft:"10px",fontSize:'15px'}}></i>
                  </div>
                 {hasBeenRate?"": <div onClick={()=>setOpenRateing(true)} style={{cursor:"pointer"}}>
                    <i className="bi bi-star"></i>  rate
                  </div>}
                </div>
                <div className={ProductPageStyle.footer}>
                  <h3>{"₪" +seletedProduct.price}</h3>
                  <button className={ProductPageStyle.btn} onClick={()=>handleClickAddToCart(seletedProduct.id)}>
                    <i className="bi bi-cart-plus-fill" id={ProductPageStyle.iconAdd}></i>
                    <h6 className={ProductPageStyle.AddTitle}>Add To Cart</h6>
                  </button>
                </div>
            </div>
        </div>
      </div>   
    );
} 
else{
  <div class={ProductPageStyle.loader}></div>
}  
  

 
}

export default ProductPage;
