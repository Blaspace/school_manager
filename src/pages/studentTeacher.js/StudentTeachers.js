import React from 'react'
import ThirdNav from '../../components/ThirdNav'
import StudentTeacherHeader from './StudentTeacherHeader'
import AllStudentTeacher from './AllStudentTeacher'
import Search from './StudentTeacherFilter'
import './studentTeacher.css'

function StudentTeachers() {
  return (
    <div className='teacher'>
        <ThirdNav/>
        <StudentTeacherHeader/>
        <div className='teacher-con'>
        <Search/>
        <br/>
        <br/>
        <AllStudentTeacher/>
        </div>
    </div>
  )
}

export default StudentTeachers
