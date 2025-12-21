import React from 'react'
import Navbar from './components/Navbar'
import Nav2 from './components/Nav2'
import { useState } from 'react'
import Button from './components/Button'

const App = () => {

  // const [theme, settheme] = useState('light') 
  return (
    <div>
      <Navbar></Navbar>
      {/* <Nav2></Nav2> */}
      <Button></Button>
    </div>
  )
}

export default App