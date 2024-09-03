import React, { useState } from 'react'
import ThirdNav from '../../components/ThirdNav'
import StudentBillingHeader from '../StudentBilling.js/StudentBillingHeader'
import AllNotification from './AllNotification'
import './notification.css'
import TeacherDropdown from '../../components/TeacherDropdown'

function TeacherNotification() {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <ThirdNav toggle={toggle} setToggle={setToggle}/>
      <TeacherDropdown toggle={toggle} setToggle={setToggle}/>
      <StudentBillingHeader text={"Your notification"}/>
      <AllNotification/>
    </div>
  )
}

export default TeacherNotification
