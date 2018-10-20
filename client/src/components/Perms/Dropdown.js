import React from 'react';

import '../../styles/perms.css'

const Dropdown = () => {
    return (
        <div className="dropdown">
            <button className="dropdown-toggle" type="button" data-toggle="dropdown" style={button}>Products <span className="caret"></span></button>
            <ul className="dropdown-menu">
                <li><a href="/products/hydra" className="products-drop">Hydra</a></li>
                <li><a href="/products/monstar" className="products-drop">Monstar</a></li>
                <li><a href="/products/yeti" className="products-drop">Yeti</a></li>
                <li><a href="/products/maxx" className="products-drop">Maxx</a></li>
            </ul>
        </div>
    )
}

const button = {
    border: 'none',
    background: 'none'
}

export default Dropdown;