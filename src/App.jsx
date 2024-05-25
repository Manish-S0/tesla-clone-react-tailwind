
import React,{ useState } from 'react'

import Home from './components/Home'
import Hero from './components/Hero'

import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    
    <Hero/>
    <Home/>
  
    <Footer/>
    </>
  )
}

export default App
