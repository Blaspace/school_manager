import React, { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'
import StudentContext from '../context/StudentContext'

function GetStudentTeacher() {
  const [loading, setLoading] = useState(false)
  const {setTeacher, teacher} = useContext(StudentContext)
  useEffect(()=>{
    if(!teacher?.length){
    setLoading(true)
      fetch(`${process.env.REACT_APP_APIURL}/student/teacher`,{
          headers: {
              Authorization : `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then((res)=>res.json())
      .then((data)=> setTeacher(data))
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
    }
  },[])
  return (
    <>
      <Loading loading={loading}/>
      <Outlet/>
    </>
  )
}

export default GetStudentTeacher
