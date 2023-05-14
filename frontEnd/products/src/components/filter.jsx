import { useEffect } from "react";
import { useState } from "react";
import filter from "../styles/filter.module.scss"

function Filter(prop) {
    
    const [categories,setCategories]=useState();
    const [active,setActive]=useState(false);

    function filterDub(arr) {
        let ss =[];
        for (let i =0 ; i<arr.length; i++) {
            ss.push(arr[i].categories)
        }
        setCategories(ss.filter((ele,index)=>{
            return ss.indexOf(ele)===index
        }) ) 
    }


    useEffect(()=>{
        filterDub(prop.data)
    },[prop.data])
    
    return (
        <div className={filter.filterDiv} >
            <div className={filter.titlesDiv}>
            <h5 className={active?filter.title:filter.active} onClick={()=> {
                prop.setSelectedData()
                setActive(false)
            }}>All</h5>
                {categories&& categories.map((data,index)=>{
                    return(
                        <h5 className={ prop.selectedData === data?filter.active:filter.title}
                         onClick={()=>{
                            setActive(true)
                            prop.setSelectedData(data)
                        }} key={index}>{data}</h5>
                    )})}
            </div>
        </div>
    );
  }
  
  export default Filter;