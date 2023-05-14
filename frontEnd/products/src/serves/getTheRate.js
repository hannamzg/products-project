

import axios from "axios";


export const getTheRate =  async(productId) => {
    const res = await axios.get(`http://localhost:5000/api/getTheRate/${productId}`,{
        withCredentials:true
    });   
   
    return res
};

