import React from 'react'
import './NAV.css';
import {Link} from 'react-router-dom';

function NAV() {
  return (
    <div className='nav'>
        <nav>
            <Link to="/" style={{textDecoration:"none"}}>
            <div className="nav_logo">Portfolio</div>
            </Link>

            <div className='Nav_Links'>
                <ul>
                    <li ><Link to="/home" style={{color: "#eee", textDecoration:"none"}}>Home</Link></li>
                    <li><Link to="/about" style={{color: "#eee", textDecoration:"none"}}>About</Link></li>
                    <li><Link to="/service" style={{color: "#eee", textDecoration:"none"}}>Service</Link></li>
                    <li><Link to="/skill" style={{color: "#eee", textDecoration:"none"}}>Skill</Link></li>
                    <li><Link to="/contact" style={{color: "#eee",textDecoration:"none"}}>Contact</Link></li>
                    {/* <li><Link to="/login" style={{color: "#eee",textDecoration:"none"}}>Login</Link></li> */}

                </ul>
            </div>
        </nav>
      
    </div>
  )
}

export default NAV
