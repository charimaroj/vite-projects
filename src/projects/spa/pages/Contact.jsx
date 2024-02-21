import React from 'react'
import { Outlet } from 'react-router-dom'
const Contact = () => {
  return (
    <div className='row p-4'>
    <div className="col-md-12 text-center">
        <h1>Contact Page</h1>
        <Outlet/>
    </div>
</div>
  )
}

export default Contact