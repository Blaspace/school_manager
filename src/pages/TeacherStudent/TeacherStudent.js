import React from 'react'
import ThirdNav from '../../components/ThirdNav'
import StudentBillingHeader from '../StudentBilling.js/StudentBillingHeader'
import Search from './TeacherStudentFilter'
import AllStudent from './AllTeacherStudent'

function TeacherStudent() {
  return (
    <div className='teacher'>
      <ThirdNav/>
      <StudentBillingHeader text={"Your students"}/>
      <div className='teacher-con'>
      <Search/>
      <br/>
      <AllStudent/>
      </div>
    </div>
  )
}

export default TeacherStudent
