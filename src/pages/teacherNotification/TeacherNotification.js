import React from 'react'
import ThirdNav from '../../components/ThirdNav'
import StudentBillingHeader from '../StudentBilling.js/StudentBillingHeader'
import AllNotification from './AllNotification'
import './notification.css'

function TeacherNotification() {
  return (
    <div>
      <ThirdNav/>
      <StudentBillingHeader text={"Your notification"}/>
      <AllNotification/>
    </div>
  )
}

export default TeacherNotification
