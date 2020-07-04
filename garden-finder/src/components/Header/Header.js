import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = () => {

    return (
        <div className="garden-header">
            <div className="garden-header-content">
               <h1> T H E   G A R D E N S </h1>
               <ul>
                  <Link to="/"><li>HOME</li></Link>
               </ul>
            </div>
        </div>
    )
}

export default Header;