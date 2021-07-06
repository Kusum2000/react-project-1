import React from 'react';
import {Link} from 'react-router-dom';
function Nav(){
    return(
        <nav>
            <ul>
                <Link to='/about' className='nav-link'>
                <li>About</li>
                </Link>
                <Link to='/contact' className='nav-link'>
                <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;