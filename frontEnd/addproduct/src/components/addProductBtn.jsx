import addProductBtn from  "../styles/AddProductBtn.module.scss"


function AddProductBtn(prop) {
   return (
    <div className={addProductBtn.main}>
        <div>
            <button className={addProductBtn.btn} onClick={()=>prop.setOpenAddProcdut(true)}>Add product</button>
        </div>        
    </div>
   )
}

export default AddProductBtn