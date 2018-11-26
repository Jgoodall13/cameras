import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/perms.css'

const Dropdown = () => {
    return (
        <div className="dropdown">
            <button className="dropdown-toggle" type="button" data-toggle="dropdown" style={button}>Products <span className="caret"></span></button>
            <ul className="dropdown-menu">
                <li><Link to="/products/hydra" className="products-drop">Hydra</Link> </li>
                <li><Link to="/products/monstar" className="products-drop">Monstar</Link> </li>
                <li><Link to="/products/maxx" className="products-drop">Maxx</Link> </li>
            </ul>
        </div>
    )
}

const button = {
    border: 'none',
    background: 'none'
}

export default Dropdown;