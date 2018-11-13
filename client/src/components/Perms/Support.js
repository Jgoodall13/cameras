import React from 'react';

import '../../styles/perms.css'

const Support = () => {
    return (
        <div className="dropdown">
            <button className="dropdown-toggle" type="button" data-toggle="dropdown" style={button}>Support <span className="caret"></span></button>
            <ul className="dropdown-menu">
                <li><a href="/about" className="products-drop">About</a></li>
                <li><a href="/faqs" className="products-drop">FAQ</a></li>
                <li><a href="/login" className="products-drop">Login</a></li>
            </ul>
        </div>
    )
}

const button = {
    border: 'none',
    background: 'none'
}

export default Support;