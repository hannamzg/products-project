import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  name: yup
  .string()
  .min(2)
  .required("Name Required"),
  email: yup.string().email("Please enter a valid email").required("Email Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required(" Password Required"),
});



export const addProductSchema = yup.object().shape({
  name: yup
  .string()
  .min(2)
  .required("Name Required"),
  price: yup.string().min(2)
  .required("price Required"),
  description: yup.string().min(2)
  .required("description Required"),
  categories: yup.string().min(2)
  .required("categories Required"),
});


export const singInSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required(" Password Required"),
});