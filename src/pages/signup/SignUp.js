import FirstSectionSignup from "./FirstSection"
import SecondSection from "./SecondSection"
import {useParams} from 'react-router-dom'
import './Signup.css'
import ThirdSectionSignup from "./ThirdSection"

const SignUp = ()=>{
    const params = useParams()
    return (
        <div className="signup">
            {
            Number(params.section) === 1 ?
            <FirstSectionSignup/>
            : Number(params.section) === 2 ?
            <SecondSection/>
            : <ThirdSectionSignup/>
            }
        </div>
    )
}

export default SignUp