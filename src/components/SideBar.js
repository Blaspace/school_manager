import React, { useContext} from "react"
import { AiFillSetting, AiOutlineHome, AiFillProfile } from "react-icons/ai"
import { FaChalkboardTeacher, FaMoneyBill, FaUsers } from "react-icons/fa"
import { IoCameraSharp } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import SchoolContext from "../context/SchoolContext"
import ellips from '../public/Ellipse.png'

const SideBar = ()=>{
   const {school} = useContext(SchoolContext)
    return (
        <div className="sidebar">
            <header>
                <span>
                <img src={ellips} alt="ellips"/>
                    <small>
                        <IoCameraSharp size={20}/>
                    </small>
                </span>
                <br/>
                <p>{school?.schoolName}</p>
            </header>
            <ul>
                <NavLink to={'/dashboard'} id="navlink" className={({isActive, isPending})=>{
                   return isActive ? "active": "domant"
                }}><AiOutlineHome size={20}/> <span>Dashboard</span></NavLink>
                <NavLink to={'/teachers'} id="navlink" className={({isActive, isPending})=>{
                   return isActive ? "active": "domant"
                }}><FaChalkboardTeacher size={20}/> <span>Teachers</span></NavLink>
                <NavLink to={'/students'} id="navlink" className={({isActive, isPending})=>{
                   return isActive ? "active": "domant"
                }}><FaUsers size={20} /><span>Student/classes</span></NavLink>
                 <NavLink to={'/billing'} id="navlink" className={({isActive, isPending})=>{
                   return isActive ? "active": "domant"
                }}><FaMoneyBill size={20}/> <span>Billing</span></NavLink>
                <NavLink to={'/student'} id="navlink" className={({isActive, isPending})=>{
                   return isActive ? "active": "domant"
                }}><AiFillSetting size={20}/> <span>Setting and profile</span></NavLink>
            </ul>
        </div>
    )
}

export default SideBar