import React, { useState } from 'react'
import ThirdNav from '../../components/ThirdNav'
import './student.css'
import Search from './Search'
import StudentHeader from './StudentHeader'
import NewStudent from './NewStudent'
import AllStudent from './AllStudent'

function Students() {
  const [newStudent, setNewStudent] = useState(false)
  return (
    <div className='teacher'>
        <ThirdNav/>
        <NewStudent newStudent={newStudent} setNewStudent={setNewStudent}/>
        <StudentHeader setNewStudent={setNewStudent}/>
        <br/>
        <div className='teacher-con'>
            <Search/>
            <br/>
            <br/>
            <AllStudent/>        
        </div>
    </div>
  )
}

export default Students
