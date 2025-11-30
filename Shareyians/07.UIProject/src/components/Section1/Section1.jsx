import React from 'react'
import Navbar from './Navbar.jsx'
import Page1Content from './Page1Content.jsx'

const Section1 = (props) => {
    console.log(props.users);
  return (
    <div className='h-screen w-full mb-10'>
        <Navbar></Navbar>
        <Page1Content users={props.users}></Page1Content>
    </div>
  )
}

export default Section1