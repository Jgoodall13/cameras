import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/perms.css'

const Support = () => {
    return (
        <div className="dropdown">
            <button className="dropdown-toggle" type="button" data-toggle="dropdown" style={button}>Support <span className="caret"></span></button>
            <ul className="dropdown-menu">
                <li><Link to="/about" className="products-drop">About</Link></li>
                <li><Link to="/faqs" className="products-drop">FAQ</Link></li>
                <li><Link to="/login" className="products-drop">Login</Link></li>
            </ul>
        </div>
    )
}

const button = {
    border: 'none',
    background: 'none'
}

export default Support;