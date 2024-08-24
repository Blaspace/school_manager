import React, { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'
import SchoolContext from '../context/SchoolContext'

function GetSchool() {
  const [loading, setLoading] = useState(false)
  const {setSchool, school} = useContext(SchoolContext)
  useEffect(()=>{
    if(!school){
    setLoading(true)
      fetch(`${process.env.REACT_APP_APIURL}/school`,{
          headers: {
              Authorization : `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then((res)=>res.json())
      .then((data)=> setSchool(data))
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

export default GetSchool
