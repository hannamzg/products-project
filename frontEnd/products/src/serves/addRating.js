import axios from "axios";


export const addRating =  async(userId,productId,theRating) => {
    const res = await axios.post("http://localhost:5000/api/addRating",{"userId":userId,"productId":productId,"theRating":theRating},{
        withCredentials:true
    });   
   
    return res
};

