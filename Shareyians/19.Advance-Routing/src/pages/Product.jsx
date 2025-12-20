import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link to='/product/mens' className='text-xl font-semibold '>Men</Link>
        <Link to='/product/womens' className='text-xl font-semibold '>Women</Link>
        <Link to='/product/kids' className='text-xl font-semibold '>Kids</Link>

      </div>
      {/* <h1>Product Page</h1> */}
      <Outlet></Outlet>
    </div>
  )
}

export default Product