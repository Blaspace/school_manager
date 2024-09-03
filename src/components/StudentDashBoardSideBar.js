import React, { useContext} from "react"
import { AiFillSetting, AiOutlineHome, AiFillProfile } from "react-icons/ai"
import { FaChalkboardTeacher, FaMoneyBill, FaUsers } from "react-icons/fa"
import { IoCameraSharp } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import ellips from '../public/Ellipse.png'
import StudentContext from "../context/StudentContext"

const SideBar = ()=>{
   const {school} = useContext(StudentContext)
   
    return (
        <div className="sidebar">
            <header>
                <span  style={school?.logo && {background: 'transparent'}}>
                {school?.logo ?<img src={school?.logo} alt={school?.schoolName}/>:<img src={ellips} alt="ellips"/>}
                </span>
                <br/>
                <p>{school?.schoolName}</p>
            </header>
            <ul>
                <NavLink to={'/studentdashboard'} id="navlink" className={({isActive, isPending})=>{
                   return isActive ? "active": "domant"
                }}><AiOutlineHome size={20}/> <span>Dashboard</span></NavLink>
                <NavLink to={'student/dashboard/teacher'} id="navlink" className={({isActive, isPending})=>{
                   return isActive ? "active": "domant"
                }}><FaChalkboardTeacher size={20}/> <span>Teachers</span></NavLink>
                <NavLink to={'student/dashboard/result'} id="navlink" className={({isActive, isPending})=>{
                   return isActive ? "active": "domant"
                }}><FaUsers size={20} /><span>Results</span></NavLink>
                 <NavLink to={'student/dashboard/billing'} id="navlink" className={({isActive, isPending})=>{
                   return isActive ? "active": "domant"
                }}><FaMoneyBill size={20}/> <span>Payments</span></NavLink>
                <NavLink to={'student/dashboard/materials'} id="navlink" className={({isActive, isPending})=>{
                   return isActive ? "active": "domant"
                }}><AiFillSetting size={20}/> <span>Materials</span></NavLink>
                <NavLink to={'student/dashboard/notification'} id="navlink" className={({isActive, isPending})=>{
                   return isActive ? "active": "domant"
                }}><AiFillProfile size={20}/> <span>Notifications</span></NavLink>
            </ul>

        </div>
    )
}

export default SideBar