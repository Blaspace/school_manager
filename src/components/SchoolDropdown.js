import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom';

function SchoolDropdown({toggle, setToggle}) {

  return (
    <div className='drop-down' style={{height: toggle ? '300px':0}}>
      <ul>
        <NavLink
          to={"/dashboard"}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
          onClick={()=>setToggle(!toggle)}
        >
           <span>Dashboard</span>
        </NavLink>
        <NavLink
          to={"/teachers"}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
          onClick={()=>setToggle(!toggle)}
        >
           <span>Teachers</span>
        </NavLink>
        <NavLink
          to={"/students"}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
          onClick={()=>setToggle(!toggle)}
        >
          <span>Student/classes</span>
        </NavLink>
        <NavLink
          to={"/billing"}
          id="navlink"
          className={({ isActive }) => {
            return isActive ? "domant" : "domant";
          }}
          onClick={()=>setToggle(!toggle)}
        >
           <span>Billing</span>
        </NavLink>
        
      </ul>
    </div>
  )
}

export default SchoolDropdown
