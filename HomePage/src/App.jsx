import { useState } from 'react'
import { Footer } from './Components/Footer/Footer'
import { Header } from './Components/Header/Header'
import { Middle } from './Components/Middle/middle'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Middle/>
    <Footer/>
    
    
    
    </>
  )
}

export default App
