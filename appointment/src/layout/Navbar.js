import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link style={{textDecoration: 'none'}} to='/' className='nav-link'>Home</Link>
        <Link style={{textDecoration: 'none'}} to='/schedule' className='nav-link'>Schedule</Link>
        <Link style={{textDecoration: 'none'}} to='/login' className='nav-link'>Login</Link>

    </nav>
  )
}

export default Navbar