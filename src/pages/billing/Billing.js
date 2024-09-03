import React, { useState } from 'react'
import ThirdNav from '../../components/ThirdNav'
import BillingHeader from './BillingHeader'
import BillingHistory from './PaymentHistory'
import AllBilling from './AllBilling'
import './billing.css'
import NewBilling from './NewBilling'
import SchoolDropdown from '../../components/SchoolDropdown'

function Billing() {
  const [addBilling, setAddBilling] = useState(false)
  const [toggle, setToggle] = useState(false)
  return (
    <div>
        <ThirdNav toggle={toggle} setToggle={setToggle}/>
        <SchoolDropdown toggle={toggle} setToggle={setToggle}/>
        <NewBilling addBilling={addBilling} setAddBilling={setAddBilling}/>
        <br/>
        <BillingHeader setNewBilling={setAddBilling}/>
        <br/>
        <br/>
        <div className='billing'>
            <div className='billing-con'>
            <section>
                <AllBilling/>
            </section>
            <section>
                <BillingHistory/>
            </section>
            </div>
        </div>
    </div>
  )
}

export default Billing
