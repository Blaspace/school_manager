import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import {MdOutlineMenu} from 'react-icons/md'

const ThirdNav =({toggle, setToggle})=>{
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleLogout = ()=>{
        setLoading(true)
      fetch(`${process.env.REACT_APP_APIURL}/logout`,{
          headers: {
              Authorization : `Bearer ${localStorage.getItem('token')}`
          }
      })
      .finally(()=>{
        localStorage.clear('token')
        navigate('../../login')
        setLoading(false)
    })
    }
   return ( 
   <nav>
    <Loading loading={loading}/>
        <div className="third-nav">
            <span onClick={()=>setToggle(!toggle)}>
            <MdOutlineMenu />
            </span>
            <div className="nav-right">
                <FiBell size={20}/>
                <p style={{cursor:'pointer'}} onClick={handleLogout}>Logout</p>
            </div>
        </div>
    </nav>
   )
}

export default ThirdNav