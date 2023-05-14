import axios from "axios";

export async function EditProductServes(values){
    const res = await axios.put(`http://localhost:5000/api/editProduct`,values,{
        withCredentials: true
    });

    return res;
}