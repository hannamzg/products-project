import singUp from  '../styles/SingUp.module.scss'
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {basicSchema} from "../schemas"
import {toast } from 'react-toastify';
import axios from "axios";

//npm install formik



function SingUp() {
  const [currentUser,setcurrentUser]=useState(JSON.parse(localStorage.getItem("adminUser")));
  
  const [Color,setColor]=useState('light');
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  
  useEffect(()=>{
    if (currentUser) {
      navigate('/mainPage')
    }
  },[])

  
  const handleOnChange = (event) => {
    setFile(event.target.files[0]); 
  };
  

 

  const  handleOnClick = async () => {
   
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name",values.name);
    formData.append("email",values.email);
    formData.append("password",values.password);
    try{
      const res = await axios.post("http://localhost:5000/api/auth/singUp",formData);
      if (res.status===200&&res.data ==="Done") {
        navigate('/singIn')
        toast("welcome", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
      }
    }
    catch(err){
      toast(err, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }
    
 /*    fetch("http://localhost:5000/api/auth/singUp", {
      method: "POST",
      body: formData,
    }).then((response) => {
      
        response.json().then((data) => { 
           response.status==="200"&&navigate('/singIn')
           Color==="light"? toast("welcome", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            }):
            toast(data, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              })
        });
      })
      .catch((error) => {
      Color==="light"?  toast(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }):toast(error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
      });  */  
  };
  
  function onSubmit() {
    if (errors.name) {
      Color==="light"?  toast(errors.name, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }):toast(errors.name, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
    }
    else if (errors.email) {
      Color==="light"?  toast(errors.email, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }):toast(errors.email, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
    }
    else if (errors.password) {
      Color==="light"?  toast(errors.password, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }):toast(errors.password, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          })
    }
    handleOnClick();
  }

  const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:{
      name:"",
      email:"",
      password:""
    },
    validationSchema:basicSchema,
    onSubmit
  })

 

    return (
      <div className={Color ==="light"?singUp.light:singUp.dark}>
       
        <div className={singUp.singInDiv}>
          <div>
            <div onClick={()=> { Color === "light"? setColor("dark"):setColor("light") }} className={singUp.ChangeColor}>{Color ==="light"?<i className="bi bi-moon-fill" style={{color:"white",fontSize:"40px",cursor:"pointer"}}></i>:<i className="bi bi-brightness-high" style={{color:"black",fontSize:"40px",cursor:"pointer"}}> </i>}</div>
          </div>
          
            <form className={singUp.from} >
              <h2 className={singUp.header} >sing Up</h2>               
                <input type="text" className={errors.name&& touched.name ? singUp.inp +" " + singUp.inputErr:singUp.inp} onBlur={handleBlur} name="name"  value={values.name} onChange={handleChange}  placeholder="name"/>
                {errors.name &&touched.name ?<h6 className={singUp.err}>{errors.name}</h6>:""}
                <input type="text" className={errors.email&& touched.email ? singUp.inp +" " + singUp.inputErr:singUp.inp} onBlur={handleBlur} name="email" value={values.email} onChange={handleChange}  placeholder="email"/>
                {errors.email &&touched.email ?<h6 className={singUp.err}>{errors.email}</h6>:""}
                <input type="text" className={errors.password&& touched.password ? singUp.inp +" " + singUp.inputErr:singUp.inp} onBlur={handleBlur} name="password"  value={values.password} onChange={handleChange} placeholder="password"/>
                {errors.password &&touched.password ?<h6 className={singUp.err}>{errors.password}</h6>:""}
                <input type="file" onChange={handleOnChange} />
                <button className={singUp.submit}  type='submit'  onClick={handleSubmit}>submit</button>
                <button onClick={()=>  navigate("/singIn")} className={singUp.sendToSingIn}>you already have account</button>
            </form>
        </div>
      </div>
     
    );
  }
  
  export default SingUp;