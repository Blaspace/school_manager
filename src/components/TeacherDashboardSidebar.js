import React, { useContext} from "react"
import { AiFillSetting, AiOutlineHome, AiFillProfile } from "react-icons/ai"
import { FaChalkboardTeacher, FaMoneyBill, FaUsers } from "react-icons/fa"
import { IoCameraSharp } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import ellips from '../public/Ellipse.png'
import TeacherContext from "../context/TeacherContext"

const TeacherSideBar = ()=>{
   const {school} = useContext(TeacherContext)
   
    return (
        <div className="sidebar">
            <header>
                <span>
                <img src={ellips} alt="ellips"/>
                </span>
                <br/>
                <p>{school?.schoolName}</p>
            </header>
            <ul>
                <NavLink to={'/teacherdashboard'} id="navlink" className={({isActive})=>{
                   return isActive ? "active": "domant"
                }}><AiOutlineHome size={20}/> <span>Dashboard</span></NavLink>
                <NavLink to={'teacher/dashboard/student'} id="navlink" className={({isActive})=>{
                   return isActive ? "active": "domant"
                }}><FaChalkboardTeacher size={20}/> <span>Student</span></NavLink>
                <NavLink to={'teacher/dashboard/result'} id="navlink" className={({isActive})=>{
                   return isActive ? "active": "domant"
                }}><FaUsers size={20} /><span>Results</span></NavLink>
                <NavLink to={'teacher/dashboard/material'} id="navlink" className={({isActive})=>{
                   return isActive ? "active": "domant"
                }}><AiFillSetting size={20}/> <span>Materials</span></NavLink>
                <NavLink to={'teacher/dashboard/notification'} id="navlink" className={({isActive})=>{
                   return isActive ? "active": "domant"
                }}><AiFillProfile size={20}/> <span>Notifications</span></NavLink>
            </ul>

        </div>
    )
}

export default TeacherSideBar