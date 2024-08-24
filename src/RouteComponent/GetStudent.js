import React, { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'
import SchoolContext from '../context/SchoolContext'

function GetStudent() {
  const [loading, setLoading] = useState(false)
  const {setStudent, student} = useContext(SchoolContext)
  useEffect(()=>{
    if(!student?.length){
    setLoading(true)
      fetch(`${process.env.REACT_APP_APIURL}/student`,{
          headers: {
              Authorization : `Bearer ${localStorage.getItem('token')}`
          }
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

export default GetStudent
