import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-8 bg-cyan-900 items-center'>
      <h2 className='text-xl font-bold'>Kshtriya</h2>
      <div className='flex gap-10'>
        <Link to="/" className='text-lg font-bold'>Home</Link>
        <Link to="/about" className='text-lg font-bold'>About</Link>
        <Link to="/product" className='text-lg font-bold'>Product</Link>
        <Link to="/courses" className='text-lg font-bold'>Courses</Link>

      </div>
    </div>
  )
}

export default Navbar
