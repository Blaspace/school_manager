import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const ThirdSectionSignup = ()=>{
    const [numberOfStaff, setNumberOfStaff] = useState()
    const [schoolAddress, setSchoolAddress] = useState()
    const navigate = useNavigate()

    const handleSignup = (e)=>{
        if(schoolAddress && numberOfStaff){
        e.target.innerText = "Loading..."
        e.target.style.backgroundColor = "lightgrey"
        e.target.style.color = "black"

            const i = localStorage.getItem('school')
        if(i && i !== 'undefined'){
            fetch(`${process.env.REACT_APP_APIURL}/school/add`,{
                method: 'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({...JSON.parse(i), numberOfStaff, schoolAddress})
            })
            .then((res)=>{
                if(res.ok){
                    return res.json()
                }else if(res.status === 409){
                    alert('this school already exist')
                }else{
                    alert('something went wrong')
                }
            })
            .then((data)=>{
                console.log(data);
                localStorage.setItem('token', data.accessToken)
                navigate('../../dashboard')
            })
            .catch(err=>console.log(err))
            .finally(()=>{
                e.target.innerText = "Signup"
                e.target.style.backgroundColor = "#2d88d4"
                e.target.style.color = "#ffffff"
            })
        }else{
            navigate('../../signup/1')
        }
    }else{
        alert('School address and number of staff required')
    }
    }

    return (
        <>
        <div className="signup-right">
        <h1>Welcome, create your school account</h1>
        <br/>
        <br/>
        <br/>
        <form onSubmit={(e)=> e.preventDefault()}>
            <br/>
            <br/>
                <p>
                    It is our great pleasure to have<br/> you on board
                </p>
            <br/>
            <br/>
                <input type="number" placeholder="Number of staff" required onChange={(e)=> setNumberOfStaff(e.target.value)}/>
            <br/>
                <input type="text" placeholder="School address" required onClick={(e)=> setSchoolAddress(e.target.value)}/>
            <br/>
            <br/>
                <button onClick={(e)=>handleSignup(e)}>SignUp</button>
                <br/>
                <p><small>Already have an account?</small> <b style={{color: '#2d88d4', cursor: 'pointer'}} onClick={()=>navigate('../../login')}>Login</b></p>
            <br/>
            <br/>
        </form>
        <br/>
        </div>
        <div className="signup-left">

        </div>
        </>
    )
}

export default ThirdSectionSignup