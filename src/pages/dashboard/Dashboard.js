import React, {useState} from 'react'
import ThirdNav from '../../components/ThirdNav'
import DashboardHeader from './DashboardHeader'
import './dashboard.css'
import DashboardBody from './DashboardBody'
import SchoolDropdown from '../../components/SchoolDropdown'

function Dashboard() {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <ThirdNav toggle={toggle} setToggle={setToggle}/>
      <SchoolDropdown toggle={toggle} setToggle={setToggle}/>
      <DashboardHeader/>
      <DashboardBody/>
    </div>
  )
}

export default Dashboard
