import axios from "axios";

export const getAllProducts =  async() => {
    const res = await axios.get("http://localhost:5000/api/getProduct",{
      withCredentials:true
    });
    return res
};
