import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li><Link className='link' to="/">Home</Link></li>
                <li><Link className='link' to="/About">About</Link></li>
                <li><Link className='link' to="/Service">Service</Link></li>
                <li><Link className='link' to="/Contact">Contact</Link></li>    
                {/*<li><Link className='link' to="/UseState">UseState</Link></li>*/}
                <li><Link className='link' to="/Login">Login</Link></li>
                <li><Link className='link' to="/hook">Hook</Link></li>
    
            </ul>
        </nav>
    </div>
  )
}

export default Navbar




{/*import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {

 return (
 <div>
      </div> <h1>{props.name}</h1>*/}
      {/*<nav>
        <ul className="navbar">
                {/*<li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Service</li>*/}
                
                {/*<li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/service">Service</a></li>*/}

                {/*<li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/service">Service</Link></li>*/}
                
                {/*<li><Link className='link to="/">Home</Link></li>
                <li><Link className='link to="/about">About</Link></li>
                <li><Link className='link to="/contact">Contact</Link></li>
                <li><Link className='link to="/service">service</Link></li>
                <li><Link className='link to="/useState">UseState</Link></li>
                                  
        </ul>
      </nav>
    </div>
 )
}
export default Navbar*/}

