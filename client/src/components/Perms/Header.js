import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown'

import Logo from '../../images/logo.png'

class Header extends Component{

    state = {
        hamburger: false
    }

    render(){
        return (
            <div className="headers-div">
                <div className="container header-desktop">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="/"><img src={Logo} style={{height: '100px', width: '100px'}} alt="main-logo" /></Link>
                        </div>
                        <div className="col-md-9">
                            <nav className='header-nav'>
                                <span id="product-drop" className="nav-links"><Dropdown /></span>
                                <Link className="nav-links" to="/about">About</Link>
                                <Link className="nav-links" to="/faqs">FAQ</Link>
                                <Link className="contact-button" to="/order">Order Now</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;