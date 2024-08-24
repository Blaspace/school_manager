import React from "react"
import SideBar from "../components/SideBar"
import { Outlet } from "react-router-dom"

const DashboardRoute =()=>{
    return (
        <div className="dashboard-con">
            <SideBar/>
            <div className="dashboard-content">
            <Outlet/>
            </div>
        </div>
    )
}

export default DashboardRoute