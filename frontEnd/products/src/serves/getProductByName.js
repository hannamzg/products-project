import axios from "axios";

export const getProductByName =  async(id) => {

    const res = await axios.get(`http://localhost:5000/api/getProductById/${id}`);

    return res
};
