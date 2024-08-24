import React from 'react'
import ThirdNav from '../../components/ThirdNav'
import DashboardHeader from './DashboardHeader'
import './dashboard.css'
import DashboardBody from './DashboardBody'

function Dashboard() {
  return (
    <div>
      <ThirdNav/>
      <DashboardHeader/>
      <DashboardBody/>
    </div>
  )
}

export default Dashboard
