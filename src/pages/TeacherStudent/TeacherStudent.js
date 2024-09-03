import React, { useState } from 'react'
import ThirdNav from '../../components/ThirdNav'
import StudentBillingHeader from '../StudentBilling.js/StudentBillingHeader'
import Search from './TeacherStudentFilter'
import AllStudent from './AllTeacherStudent'
import TeacherDropdown from '../../components/TeacherDropdown'

function TeacherStudent() {
  const [search, setSearch] = useState(null)
  const [toggle, setToggle] = useState(false)
  return (
    <div className='teacher'>
      <ThirdNav toggle={toggle} setToggle={setToggle}/>
      <TeacherDropdown toggle={toggle} setToggle={setToggle}/>
      <StudentBillingHeader text={"Your students"}/>
      <div className='teacher-con'>
      <Search setSearch={setSearch}/>
      <br/>
      <AllStudent search={search}/>
      </div>
    </div>
  )
}

export default TeacherStudent
