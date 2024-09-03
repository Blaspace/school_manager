import React, { useState } from 'react'
import ThirdNav from '../../components/ThirdNav'
import StudentTeacherHeader from './StudentTeacherHeader'
import AllStudentTeacher from './AllStudentTeacher'
import Search from './StudentTeacherFilter'
import './studentTeacher.css'
import StudentDropdown from '../../components/StudentDropdown'

function StudentTeachers() {
  const [search, setSearch] = useState(null)
  const [toggle, setToggle] = useState(false)
  return (
    <div className='teacher'>
        <ThirdNav toggle={toggle} setToggle={setToggle}/>
        <StudentDropdown toggle={toggle} setToggle={setToggle}/>
        <StudentTeacherHeader/>
        <div className='teacher-con'>
        <Search setSearch={setSearch}/>
        <br/>
        <br/>
        <AllStudentTeacher search={search}/>
        </div>
    </div>
  )
}

export default StudentTeachers
