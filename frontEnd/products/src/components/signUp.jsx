import singUpStyle from "../styles/signUp.module.scss";
import { singUpServer } from "../serves/singUp.js";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";

function SignUp(prop) {
  const [file, setFile] = useState(null);
  const handleOnChangeFile = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  function onSubmit() {
    try {
      singUpServer(values.name, values.email, values.password, file)
        .then((data) => {
          console.log(data);
          prop.setOpenSignUp(false);
          prop.setOpenSignIn(true);
          toast("Congratulations, you have an account", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
        name: "",
        email: "",
        password: "",
      },
      // validationSchema:basicSchema,
      onSubmit,
    });

  return (
    <div className={singUpStyle.mainDiv} onClick={() => prop.setOpenSignUp(false)}>
      <form className={singUpStyle.fromDiv} onClick={(e) => e.stopPropagation()}>
        <div
          className={singUpStyle.closedBtn}
          onClick={() => prop.setOpenSignUp(false)}
        >
          <i className="bi bi-x-circle" id={singUpStyle.close}></i>
        </div>
        <div className={singUpStyle.inputsDiv}>
          <div className={singUpStyle.titleDiv}>
            <h2 className={singUpStyle.title}>Sign Up</h2>
            <i className="bi bi-box-arrow-in-right" id={singUpStyle.icon}></i>
          </div>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={values.name}
            onChange={handleChange}
            className={singUpStyle.inp}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            className={singUpStyle.inp}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            className={singUpStyle.inp}
          />
          <input
            type="file"
            onChange={handleOnChangeFile}
            className={singUpStyle.file}
          />
        </div>
        <button
          type="submit"
          className={singUpStyle.btn}
          onClick={handleSubmit}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
