import React, { useState } from 'react'
import ThirdNav from '../../components/ThirdNav'
import './student.css'
import Search from './Search'
import StudentHeader from './StudentHeader'
import NewStudent from './NewStudent'
import AllStudent from './AllStudent'
import SchoolDropdown from '../../components/SchoolDropdown'

function Students() {
  const [newStudent, setNewStudent] = useState(false)
  const [search, setSearch] = useState(null)
  const [toggle, setToggle] = useState(false)
  return (
    <div className='teacher'>
        <ThirdNav toggle={toggle} setToggle={setToggle}/>
        <SchoolDropdown toggle={toggle} setToggle={setToggle}/>
        <NewStudent newStudent={newStudent} setNewStudent={setNewStudent}/>
        <StudentHeader setNewStudent={setNewStudent}/>
        <br/>
        <div className='teacher-con'>
            <Search setSearch={setSearch}/>
            <br/>
            <br/>
            <AllStudent search={search}/>        
        </div>
    </div>
  )
}

export default Students
