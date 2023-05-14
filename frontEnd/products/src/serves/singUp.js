import axios from "axios";

export async function singUpServer(name,email,password,file) {
    const formData = new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("image", file);
    
    const res = await axios.post("http://localhost:5000/api/authUsers/singUp",formData);

    return res;
}
