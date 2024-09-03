import React, { useContext, useState } from 'react'
import StudentContext from '../../context/StudentContext'
import Loading from '../../components/Loading'

function AllBills() {
    const { billing } = useContext(StudentContext)
    const [loading, setLoading] = useState(false)

    const handlePay =(title, amount)=>{
      setLoading(true)
      fetch(`${process.env.REACT_APP_APIURL}/student/pay`,{
        method:'POST',
        headers: {
          Authorization : `Bearer ${localStorage.getItem('token')}`,
          "Content-Type":'application/json'
      },
      body: JSON.stringify({amount, title})
      })
      .then(res=>res.json())
      .then(data=>window.open(data.success))
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
    }

  return (
    <div className='school-charges'>
      <Loading loading={loading}/>
      {
        billing?.map((value, i)=>{
            return (
                <div>
                    <section>
                    <p>{value?.title}</p>
                    <br/>
                    <p><small>$</small>{value?.amount}</p>
                    </section>
                    <section>
                        <span onClick={()=>handlePay(value?.title, value?.amount)}>Pay</span>
                    </section>
                </div>
            )
        })
      }
    </div>
  )
}

export default AllBills
