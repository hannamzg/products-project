import axios from "axios";

export const getCartProducts =  async(userId) => {
    const res = await axios.get(`http://localhost:5000/api/getCartProducts/${userId}`,{
        withCredentials:true
    });

    return res
};
