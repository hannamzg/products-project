import axios from "axios";

export async function deleteProductServes(id){
    const res = await axios.delete(`http://localhost:5000/api/deleteProduct/${id}`,{
        withCredentials: true
    });

    return res;
}