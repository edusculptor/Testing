import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
   <>
   <div className='flex list-none bg-amber-400 justify-evenly'>
  <Link to="/"> <li>Pratik</li></Link> 
   <Link to='/Piyush'> <li>Piyush</li></Link>
  <Link to='/Devyani_Steffi'>  <li>Devyani/steffi</li></Link>
  <Link to='/Bhavna'><li>Bhavna</li></Link>  
   <Link to='/Dhanasvi'> <li>Dhanasvi</li></Link>
  <Link to='/Minal'><li>Minal</li></Link>  
  <Link to='/Akash'><li>Akash</li></Link>  
</div>
   </>
  )
}

export default Navbar