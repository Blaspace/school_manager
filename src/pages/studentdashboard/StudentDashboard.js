import React from 'react'
import ProfileArea from './ProfileArea'
import './studentdashboard.css'
import ThirdNav from '../../components/ThirdNav'
import StudentDashbordBody from './StudentDashbordBody'
import DashboardHeader from './DashboardHeader'

function StudentDashboard() {
  return (
    <div>
      <ThirdNav/>
    <div className='student-dashboard'>
      <ProfileArea/>
      <DashboardHeader/>
      {/*<StudentDashbordBody/>*/}
      </div>
      </div>
  )
}

export default StudentDashboard
