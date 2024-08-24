import React, { useContext } from 'react'
import StudentContext from '../../context/StudentContext'

function AllBills() {
    const { billing } = useContext(StudentContext)
    
  return (
    <div className='school-charges'>
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
                        <span>Pay</span>
                    </section>
                </div>
            )
        })
      }
    </div>
  )
}

export default AllBills
