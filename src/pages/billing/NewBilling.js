import React, { useContext, useState } from 'react'
import Loading from '../../components/Loading';
import SchoolContext from '../../context/SchoolContext';

function NewBilling({addBilling, setAddBilling}) {
    const [amount, setAmount] = useState()
    const [title, setTitle] = useState()
    const [loading, setLoading] = useState()
    const {billing, setBilling} = useContext(SchoolContext)

    const handleAddBilling = () => {
        if (
          amount && title
        ) {
          setLoading(true);
          setAddBilling(false);
          fetch(`${process.env.REACT_APP_APIURL}/billing/add`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
              amount, title
            }),
          })
            .then((res) => {
              if (res.ok) {
                return res.json();
              }
            })
            .then((data) => {
              setBilling([...billing,data]);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
        } else {
          alert("all feilds required");
        }
      };
    
  return (
    <>
    <Loading loading={loading} />
    {addBilling &&
    <div className='popup-con'>
      <div className='popup'>
      <br/>
      <br/>
      <label>Billing title</label>
      <br/>
        <input type='text' placeholder='Add billin title' onChange={(e)=>setTitle(e.target.value)}/>
        <br/>
        <br/>
        <label>Amount</label>
        <br/>
        <input type='number' placeholder='add billing Amount' onChange={(e)=> setAmount(e.target.value)}/>
        <br/>
        <br/>
        <button className='btn' onClick={handleAddBilling}>Add Billing</button>
        <button className='btn' onClick={()=>setAddBilling(false)}>Cancil</button>
        <br/>
        <br/>
      </div>
    </div>
}
    </>
  )
}

export default NewBilling
