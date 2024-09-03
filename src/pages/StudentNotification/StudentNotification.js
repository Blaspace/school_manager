import React, { useState } from 'react'
import ThirdNav from '../../components/ThirdNav'
import StudentBillingHeader from '../StudentBilling.js/StudentBillingHeader'
import AllNotification from './AllNotification'
import './notification.css'
import StudentDropdown from '../../components/StudentDropdown'

function StudentNotification() {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
        <ThirdNav toggle={toggle} setToggle={setToggle}/>
        <StudentDropdown toggle={toggle} setToggle={setToggle}/>
        <br/>
        <StudentBillingHeader text={"All Notifications"}/>
        <br/>
        <AllNotification/>
    </div>
  )
}

export default StudentNotification
