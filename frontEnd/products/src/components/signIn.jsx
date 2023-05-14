import singInStyle from "../styles/signIn.module.scss";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import {AuthContext} from '../context/authContext';
import { useContext } from "react";

function SignIn(prop) {
  const { login } = useContext(AuthContext);

 async function onSubmit() {
  try { 
    await login(values)
          prop.setOpenSignIn(false)
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
        .catch((err) => {
          toast(err, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    } catch (err) {
      toast(err, {
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
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      // validationSchema:basicSchema,
      onSubmit,
  });

  return (
    <div className={singInStyle.mainDiv}   onClick={() => prop.setOpenSignIn(false)}>
      <form className={singInStyle.fromDiv} onClick={(e) => e.stopPropagation()}>
        <div
          className={singInStyle.closedBtn}
          onClick={() => prop.setOpenSignIn(false)}
        >
          <i className="bi bi-x-circle" id={singInStyle.close}></i>
        </div>
        <div className={singInStyle.inputsDiv}>
          <div className={singInStyle.titleDiv}>
            <h2 className={singInStyle.title}>sign in</h2>
            <i className="bi bi-box-arrow-in-right" id={singInStyle.icon}></i>
          </div>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            className={singInStyle.inp}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            className={singInStyle.inp}
          />
        </div>
        <button
          type="submit"
          className={singInStyle.btn}
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
