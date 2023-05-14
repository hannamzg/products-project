import axios from "axios";

export const DeleteCartProduct =  async(cartId) => {
    
    const res = await axios.delete(`http://localhost:5000/api/DeleteCartProduct/${cartId}`,{
        withCredentials:true
    });

    return res
};
