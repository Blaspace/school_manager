import React from 'react'

function SchoolChargesHeader({text}) {
  return (
    <div className='billing-header' style={{width:'100%'}}>
      <div>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default SchoolChargesHeader
