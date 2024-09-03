import React, { useState } from 'react'
import ThirdNav from '../../components/ThirdNav'
import Header from '../StudentBilling.js/StudentBillingHeader'
import AllMaterial from './AllMaterial'
import StudentDropdown from '../../components/StudentDropdown'

function StudentMaterials() {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
        <ThirdNav  toggle={toggle} setToggle={setToggle}/>
        <StudentDropdown toggle={toggle} setToggle={setToggle}/>
      <Header text={'Download study materials'}/>
      <AllMaterial/>
    </div>
  )
}

export default StudentMaterials
