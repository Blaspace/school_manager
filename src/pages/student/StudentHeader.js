import React from 'react'

function StudentHeader({setNewStudent}) {
  return (
    <header>
      <div>
        <p>Students</p>
        <div>
            <p><b>Export CSV</b></p>
            <button onClick={()=>setNewStudent(true)}>Add Student</button>
        </div>
      </div>
    </header>
  )
}

export default StudentHeader
