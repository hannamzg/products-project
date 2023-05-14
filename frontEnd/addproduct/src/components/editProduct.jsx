
import addProductForm  from "../styles/AddProductForm.module.scss";
import { useState } from "react";
import { useFormik } from "formik";
import { EditProductServes } from "../context/editProductServer";
import { addProductSchema } from "../schemas/index"

//import { toast } from "react-toastify";




function EditProduct(prop) {
 //   const [file, setFile] = useState(null);

    
    function onSubmit (){
        prop.setOpenEditProduct(false)
        let valuesArr = {name:values.name,description: values.description,price: values.price,photo:values.photo,categories:values.categories,id:prop.editValues.id}
        try{
            EditProductServes(valuesArr)
        }
        catch(err){
            console.log(err);
        }
    }

    /* const handleOnChange = (event) => {
        setFile(event.target.files[0]); 
    }; */
      
   
     
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
        initialValues:{
          name:prop.editValues.name,
          price:prop.editValues.price,
          description:prop.editValues.description,
          photo:prop.editValues.photo,
          categories:prop.editValues.categories
        },
        validationSchema:addProductSchema,
        onSubmit,
        
    })

    return (
     <div className={addProductForm.main} >
           <div className={addProductForm.DivForm}> 
                <div className={addProductForm.head} >
                    <h2 className={addProductForm.headTitle}>edit product</h2>
                    <i className="bi bi-x-circle" id={addProductForm.headIcon} onClick={()=>prop.setOpenEditProduct(false)}></i>
                </div>
                    <div className={addProductForm.form} >
                        <input type="text" className={errors.name&& touched.name ? addProductForm.inp +" " + addProductForm.inputErr:addProductForm.inp}  onBlur={handleBlur} name="name" value={values.name} onChange={handleChange}  placeholder="name"/>
                        {errors.name &&touched.name ?<h6 className={addProductForm.err}>{errors.name}</h6>:""}
                        <input type="text" className={errors.price&& touched.price ? addProductForm.inp +" " + addProductForm.inputErr:addProductForm.inp} onBlur={handleBlur} name="price" value={values.price} onChange={handleChange}  placeholder="price"/>
                        {errors.price &&touched.price ?<h6 className={addProductForm.err}>{errors.price}</h6>:""}
                        <input type="text" className={errors.description&& touched.description ? addProductForm.inp +" " + addProductForm.inputErr:addProductForm.inp} onBlur={handleBlur} name="description" value={values.description} onChange={handleChange}  placeholder="description"/>
                        {errors.description &&touched.description ?<h6 className={addProductForm.err}>{errors.description}</h6>:""}
                        <input type="text" className={errors.categories&& touched.categories ? addProductForm.inp +" " + addProductForm.inputErr:addProductForm.inp} onBlur={handleBlur} name="categories" value={values.categories} onChange={handleChange}  placeholder="categories"/>
                        {errors.categories &&touched.categories ?<h6 className={addProductForm.err}>{errors.categories}</h6>:""}
                       
                        <div className={addProductForm.divBtn}>
                            <button type="submit" className={addProductForm.btn} style={{backgroundColor:"green",fontSize:"20px"}} onClick={()=>{
                                handleSubmit()
                                prop.setProductChange(true)
                            }}><i className="bi bi-check2"></i></button>
                        </div>   
                    </div>
           </div>
     </div>
    )
}
 
 export default EditProduct