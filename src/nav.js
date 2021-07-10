import React from 'react';
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <nav>
            <ul>
                <li  className='nav-logo'>20181ISE0042</li>
                <Link to='/react-project-1' className='nav-link'>
                    <li className="li-nav">Home</li>
                </Link>
                <Link to='/about' className='nav-link'>
                    <li className="li-nav">About Me</li>
                </Link>
                <Link to='/contact' className='nav-link'>
                    <li className="li-nav">Contact Me</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;