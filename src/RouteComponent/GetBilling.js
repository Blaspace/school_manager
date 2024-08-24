import React, { useContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'
import SchoolContext from '../context/SchoolContext'

function GetBilling() {
  const [loading, setLoading] = useState(false)
  const {setBilling, billing} = useContext(SchoolContext)
  useEffect(()=>{
    if(!billing?.length){
    setLoading(true)
      fetch(`${process.env.REACT_APP_APIURL}/billing`,{
          headers: {
              Authorization : `Bearer ${localStorage.getItem('token')}`
          }
      })
      .then((res)=>res.json())
      .then((data)=> setBilling(data))
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

export default GetBilling
