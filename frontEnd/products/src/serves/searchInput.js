import axios from "axios";

export const searchInput =  async(searchValue) => {

    const res = await axios.get(`http://localhost:5000/api/searchInput/${searchValue}`);

    return res
};
