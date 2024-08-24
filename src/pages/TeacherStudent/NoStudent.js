import React from 'react'
import nostudent from '../../public/nonotification.png'

function NoStudent() {
  return (
    <div className='no-teacher'>
      <img src={nostudent} alt="no student"/>
    <div>
      <h2>No students at this time</h2>
      <p><small>Students will appear hear after they'er enrolled in your school</small></p>
      <button>
        
      </button>
      </div>
    </div>
  )
}

export default NoStudent
