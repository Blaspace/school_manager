import React, { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'
import StudentContext from '../context/StudentContext'

function GetCurrentStudent() {
  const [loading, setLoading] = useState(false)
  const {setStudent, student} = useContext(StudentContext)
  useEffect(()=>{
    if(!student){
    setLoading(true)
      fetch(`${process.env.REACT_APP_APIURL}/student/current`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      })
      .then((res)=>res.json())
      .then((data)=> setStudent(data))
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

export default GetCurrentStudent
