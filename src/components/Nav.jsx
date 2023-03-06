import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "./Logo"
const Nav = () => {
  return (
    <div style={{display : "flex", border:"2px solid green" ,backgroundColor: "yellow",justifyContent : "space-between"}}>
    <div>
        <Logo />
     </div>  
     <div>
        <ul style={{display: "flex",justifyContent: "space-around", width:"300px"}}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
            <li>
                <Link to="/Menu">Menu</Link>
            </li>
        </ul>
     </div>   
    </div>
  )
}

export default Nav