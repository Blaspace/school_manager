import React from 'react'
import nostudent from '../../public/nonotification.png'

function NoStudentTeacher() {
  return (
    <div className='no-teacher'>
        <img src={nostudent} alt='no teacher'/>
    <div>
      <h2>No Teacher has been asigned at this time</h2>
      <p><small>Teachers will appear hear after they'er asigned to your class</small></p>
      <button>
        
      </button>
      </div>
    </div>
  )
}

export default NoStudentTeacher
