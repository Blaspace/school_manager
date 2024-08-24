import React from 'react'
import ThirdNav from '../../components/ThirdNav'
import StudentBillingHeader from '../StudentBilling.js/StudentBillingHeader'
import AllNotification from './AllNotification'
import './notification.css'

function StudentNotification() {
  return (
    <div>
        <ThirdNav/>
        <br/>
        <StudentBillingHeader text={"All Notifications"}/>
        <br/>
        <AllNotification/>
    </div>
  )
}

export default StudentNotification
