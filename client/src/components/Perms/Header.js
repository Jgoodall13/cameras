import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                                <Link id="product-drop" className="nav-links" to="/products">PRODUCTS</Link>
                                <Link className="nav-links" to="/about">ABOUT</Link>
                                <Link className="nav-links" to="/faqs">FAQS</Link>
                                <Link className="contact-button" to="/order">ORDER NOW</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;