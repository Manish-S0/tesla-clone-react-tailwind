
import React,{ useState } from 'react'


import './App.css'

import Home from './components/Home'
import Hero from './components/Hero'
import Section from './components/Section'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    {/* <Home/> */}
    {/* <Hero/> */}
    {/* <Section/> */}
    <Footer/>
    </>
  )
}

export default App
