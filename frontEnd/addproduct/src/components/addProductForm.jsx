
import addProductForm  from "../styles/AddProductForm.module.scss";
import { useState } from "react";
import { useFormik } from "formik";
import {addProductServes} from "../context/addProductServes";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import {addProductSchema} from '../schemas/index';




function AddProductForm(prop) {
    const [file, setFile] = useState(null);
    const {currentUser}= useContext(AuthContext);


    function onSubmit (){

        if (errors.name) {
            toast(errors.name, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        else if (errors.price) {
            toast(errors.price, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }        
        else if (errors.description) {
            toast(errors.description, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return
        }
        
        try{
            if (Object.keys(errors).length !== 0) {
                return 
            }
            else{  
                addProductServes(file,values.name,values.price,values.description,currentUser.id,values.categories);
                toast("product has been added", {
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
              });
        }

    
    }

    const handleOnChange = (event) => {
        setFile(event.target.files[0]); 
    };
      
   
     
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:{
          name:"",
          price:"",
          description:"",
          categories:""
        },
        validationSchema:addProductSchema,
        onSubmit,
        
    })
    console.log(prop.productHasBeenAdd);

    return (
     <div className={addProductForm.main} >
           <div className={addProductForm.DivForm}> 
                <div className={addProductForm.head} >
                    <h2 className={addProductForm.headTitle}>add product</h2>
                    <i className="bi bi-x-circle" id={addProductForm.headIcon} onClick={()=>prop.setOpenAddProcdut(false)}></i>
                </div>
                    <div className={addProductForm.form} >
                        <input type="text" className={errors.name&& touched.name ? addProductForm.inp +" " + addProductForm.inputErr:addProductForm.inp}  onBlur={handleBlur} name="name" value={values.name} onChange={handleChange}  placeholder="name"/>
                        {errors.name &&touched.name ?<h6 className={addProductForm.err}>{errors.name}</h6>:""}
                        <input type="text" className={errors.price&& touched.price ? addProductForm.inp +" " + addProductForm.inputErr:addProductForm.inp} onBlur={handleBlur} name="price" value={values.email} onChange={handleChange}  placeholder="price"/>
                        {errors.price &&touched.price ?<h6 className={addProductForm.err}>{errors.price}</h6>:""}
                        <input type="text" className={errors.description&& touched.description ? addProductForm.inp +" " + addProductForm.inputErr:addProductForm.inp} onBlur={handleBlur} name="description" value={values.description} onChange={handleChange}  placeholder="description"/>
                        {errors.description &&touched.description ?<h6 className={addProductForm.err}>{errors.description}</h6>:""}
                        <input type="text" className={errors.categories&& touched.categories ? addProductForm.inp +" " + addProductForm.inputErr:addProductForm.inp} onBlur={handleBlur} name="categories" value={values.categories} onChange={handleChange}  placeholder="categories"/>
                        {errors.categories &&touched.categories ?<h6 className={addProductForm.err}>{errors.categories}</h6>:""}
                        <input type="file" className={addProductForm.file} onChange={handleOnChange}/>
                        <div className={addProductForm.divBtn}>
                            <button type="submit" className={addProductForm.btn} onClick={()=>{
                            if (Object.keys(errors).length !== 0) {
                                toast("complete your form", {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                });
                                return 
                            }
                            else{
                                handleSubmit()
                                prop.setOpenAddProcdut(false)
                            }
                            prop.setProductChange(true);
                            }}><i className="bi bi-plus-circle-fill"></i></button>
                        </div>   
                    </div>
           </div>
     </div>
    )
}
 
 export default AddProductForm