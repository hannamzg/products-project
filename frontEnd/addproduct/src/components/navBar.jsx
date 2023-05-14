import nav from '../styles/nav.module.scss';
import {  useEffect, useState } from "react";
import {logOut} from "../context/logOut"
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  
   const navigate = useNavigate();
  

    return(
        <nav className={nav.nav} >
            <div className={nav.rightDiv}>
                <h2 className={nav.iconTitle}>product</h2>
                <i className="bi bi-amd"></i>
            </div>
                
            <div className={nav.leftDiv}>
                <h1 className={nav.name}>{props.arr.name}</h1>
                <div className={nav.photoCon}>
                        <img src={"http://localhost:5000/"+props.arr.photo} alt="" className={nav.profilePhoto} onClick={()=> props.openUl?props.setOpenUl(false):props.setOpenUl(true)}/>
                        <i className="bi bi-arrow-down"></i>
                        {props.openUl &&
                        <ul className={nav.divDown}>
                            <li className={nav.liItem} onClick={()=>{
                                logOut()
                                navigate('/')
                            }}>sign out</li>                            
                        </ul>
                        }              
                </div>
            </div> 

        </nav>
    )
}

export default NavBar;