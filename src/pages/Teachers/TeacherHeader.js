import React from 'react'

function TeacherHeader({setNewTeacher}) {
  return (
    <header>
      <div>
        <p>Teachers</p>
        <div>
            <button onClick={()=>setNewTeacher(true)}>Add Teacher</button>
        </div>
      </div>
    </header>
  )
}

export default TeacherHeader
