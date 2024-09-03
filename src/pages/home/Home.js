import FifthSection from "./FifthSection"
import FirstSection from "./FirstSection"
import Footer from "./Footer"
import React,{useEffect} from "react"
import FourthSection from "./FourthSection"
import Header from "./Header"
import './home.css'
import SecondSection from "./SecondSection"
import ThirdSection from "./ThirdSection"
import Aos from "aos"
import 'aos/dist/aos.css'

const Home = ()=>{
    useEffect(()=>{
        Aos.init()
      },[])
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