import axios from "axios";




export const AddToCart =  async(userId,productId) => {
    const res = await axios.post("http://localhost:5000/api/AddToCart",{"userId":userId,"productId":productId},{
        withCredentials:true
    });   
   
    return res
};

