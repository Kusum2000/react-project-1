import React from 'react';
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <nav>
            <ul>
                <Link to='/' className='nav-logo'>
                    <li >MyReactApp<br/>Logo</li>
                </Link>
                <Link to='/' className='nav-link'>
                    <li className="li-nav">Home</li>
                </Link>
                <Link to='/about' className='nav-link'>
                    <li className="li-nav">About</li>
                </Link>
                <Link to='/contact' className='nav-link'>
                    <li className="li-nav">Contact</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;