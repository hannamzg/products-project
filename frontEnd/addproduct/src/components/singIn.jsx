import singIng from "../styles/singIn.module.scss";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {Navigate} from "react-router-dom";
import { useFormik } from "formik";
import { singInSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";


function SingIn() {
  const [Color, setColor] = useState("light");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
 // const { currentUser } = useContext(AuthContext);
  const [currentUser,setcurrentUser] = useState(JSON.parse(localStorage.getItem("adminUser")) )
  
  useEffect(()=>{
    if(currentUser){
      return  navigate("/mainPage") 
    }
  },[])
    

  const handleOnClick = async () => {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    try {
      await login(formData);
      navigate("/mainPage") 
    } catch (err) {
      toast(err.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    /*  fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      credentials: 'include',
      body: formData,
    })
      .then((response) => {      
        response.json().then((data) => {
        });
      })
      .catch((error) => {
      }); */
  };

  function onSubmit() {
    if (errors.email) {
      Color === "light"
        ? toast(errors.email, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : toast(errors.email, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    } else if (errors.password) {
      Color === "light"
        ? toast(errors.password, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
        : toast(errors.password, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    }
    handleOnClick();
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: singInSchema,
      onSubmit,
    });

    
  return (
    <div className={Color === "light" ? singIng.light : singIng.dark}>
      <div className={singIng.singInDiv}>
        <div>
          <div
            onClick={() => {
              Color === "light" ? setColor("dark") : setColor("light");
            }}
            className={singIng.ChangeColor}
          >
            {Color === "light" ? (
              <i
                className="bi bi-moon-fill"
                style={{ color: "white", fontSize: "40px", cursor: "pointer" }}
              ></i>
            ) : (
              <i
                className="bi bi-brightness-high"
                style={{ color: "black", fontSize: "40px", cursor: "pointer" }}
              >
                {" "}
              </i>
            )}
          </div>
        </div>
        <form className={singIng.from} onSubmit={handleSubmit}>
          <h2 className={singIng.header}>sign in</h2>
          <input
            type="text"
            className={
              errors.email && touched.email
                ? singIng.inp + " " + singIng.inputErr
                : singIng.inp
            }
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="email"
          />
          {errors.email && touched.email ? (
            <h6 className={singIng.err}>{errors.email}</h6>
          ) : (
            ""
          )}
          <input
            type="text"
            className={
              errors.password && touched.password
                ? singIng.inp + " " + singIng.inputErr
                : singIng.inp
            }
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="password"
          />
          {errors.password && touched.password ? (
            <h6 className={singIng.err}>{errors.password}</h6>
          ) : (
            ""
          )}
          <button className={singIng.submit} type="submit" onClick={onSubmit}>
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SingIn;
