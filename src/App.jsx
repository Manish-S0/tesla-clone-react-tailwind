
import React,{ useState } from 'react'


import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> */}
    {/* <Home/> */}
    <Hero/>
    </>
  )
}

export default App
