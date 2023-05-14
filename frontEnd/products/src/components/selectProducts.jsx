import products from "../styles/Products.module.scss";
import { selectProductByCategories } from "../serves/selectProductByCategories";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from '../context/authContext';
import {AddToCart} from "../serves/addToCart";
import { useContext } from "react";
import{ProductsManger} from '../context/productsManger'
import { toast } from "react-toastify";


function SelectProducts(prop) {
  const [data, setData] = useState([]);
  const {currentUser } =useContext(AuthContext);
  const navigate = useNavigate();
  const {setAddToCartInfoChange } =useContext(ProductsManger);

  useEffect(() => {
    try {
      selectProductByCategories(prop.selectedData)
        .then((data) => {
          
          setData(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }, [prop.selectedData]);


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
      toast(err.message
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
    }
    
  }

  return (
    <div className={products.productsDiv}>
      {data.map((data) => {
        return (
          <div className={products.productDiv} key={data.id}>
            <h5 className={products.productName}>{data.name}</h5>
            <img
              src={"http://localhost:5000/" + data.photo}
              alt=""
              className={products.img}
              onClick={()=> navigate(`/productPage/${data.id}`)}
            />
            <div className={products.productFooter}>
              <h5>{data.price + "₪"}</h5>
              <div className={products.AddToCart} onClick={()=>handleClickAddToCart(data.id)}>
                <i className="bi bi-cart-plus-fill"></i>
                <h6 className={products.addToCartH6}>Add To Cart</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SelectProducts;
