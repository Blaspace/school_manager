import FifthSection from "./FifthSection"
import FirstSection from "./FirstSection"
import Footer from "./Footer"
import FourthSection from "./FourthSection"
import Header from "./Header"
import './home.css'
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"

const Home = ()=>{
    return (
        <div>
        <Header/>
        <FirstSection/>
        <ThirdSection/>
        <FourthSection/>
        <SecondSection/>
        <FifthSection/>
        <Footer/>
        </div>
    )
}

export default Home