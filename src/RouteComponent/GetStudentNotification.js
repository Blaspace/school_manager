
import React, { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'
import StudentContext from '../context/StudentContext'

function GetStudentNotification() {
  const [loading, setLoading] = useState(false)
  const {setNotification, notification} = useContext(StudentContext)
  useEffect(()=>{
    if(!notification?.length){
    setLoading(true)
      fetch(`${process.env.REACT_APP_APIURL}/student/notification`,{
          headers: {
              Authorization : `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then((res)=>res.json())
      .then((data)=> setNotification(data))
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

export default GetStudentNotification
