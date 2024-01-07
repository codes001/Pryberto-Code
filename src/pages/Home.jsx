import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
// import { slides } from "../utils/heroData"

import Loading from "../utils/Loading"
import { useEffect, useState } from "react"

const Home = () => {


  return (
    <>
      <Loading />
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export default Home