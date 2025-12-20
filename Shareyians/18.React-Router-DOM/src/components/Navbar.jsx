import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
        <h3>Kshtriya</h3>
        <div>
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>
         <Link to='/contact'>Contact</Link>
         <Link to='/product'>Product</Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar

// we use link tag instead of <a> tag bcoz website does not reloading by goit to another path