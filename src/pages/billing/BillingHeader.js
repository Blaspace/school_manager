import React from 'react'

function BillingHeader({setNewBilling}) {
  return (
    <header >
      <div>
        <p>Billings</p>
        <div>
            <button onClick={()=>setNewBilling(true)}>Add Billing</button>
        </div>
      </div>
    </header>
  )
}

export default BillingHeader
