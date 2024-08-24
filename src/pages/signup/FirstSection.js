import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const FirstSectionSignup = ()=>{
    const [adminName, setAdminName] = useState()
    const [schoolName, setSchoolName] = useState()
    const [schoolEmail, setSchoolEmail] = useState()
    const navigate = useNavigate()

    const handleNext = ()=>{
        localStorage.setItem('school', JSON.stringify({adminName, schoolEmail, schoolName}))
        navigate('../../signup/2')
    }
    return (
        <>
        <div className="signup-right">
        <h1>Welcome, create your school account</h1>
        <br/>
        <br/>
        <br/>
        <form onSubmit={(e)=>e.preventDefault()}>
            <br/>
            <br/>
                <p>
                    It is our great pleasure to have<br/> you on board
                </p>
            <br/>
            <br/>
                <input type="text" placeholder="Enter your admin name" required onChange={(e)=>setAdminName(e.target.value)}/>
            <br/>
                <input type="text" placeholder="Enter your school name" required onChange={(e)=>setSchoolName(e.target.value)}/>
            <br/>
                <input type="text" placeholder="Enter your school email" required onChange={(e)=>setSchoolEmail(e.target.value)}/>
            <br/>
            <br/>
                <button onClick={handleNext}>Next</button>
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

export default FirstSectionSignup