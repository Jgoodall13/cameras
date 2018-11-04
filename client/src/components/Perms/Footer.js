import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/perms.css'

class Footer extends Component {
    render(){
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="footer-heading">PRODUCTS</h4>
                            <Link className="footer-nav-links" to="/products/hydra">Hydra</Link><br />
                            <Link className="footer-nav-links" to="/products/Monstar">Monstar</Link><br />
                            <Link className="footer-nav-links" to="/products/Maxx">Maxx</Link>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">ABOUT</h4>
                            <Link className="footer-nav-links" to="/about">Who We Are</Link><br />
                            <Link className="footer-nav-links" to="/faqs">FAQ's</Link>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">CONTACT US</h4>
                            <p className="footer-nav-links">1-650-940-9898</p>
                            <a href="mailto:info@gener8.net?Subject=Camera Question" className="footer-nav-links">info@gener8.net</a>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">ORDERING</h4>
                            <Link to="/order" className="small-order-button">Order Now</Link>
                            <div style={{height: "15px"}}></div>
                            <Link to="/login" className="login-button">Login</Link>
                        </div>
                        <div className="col-xs-12 legals">
                            <span className="legal-space">&copy;2018 Gener8</span>
                            <a href="" target="blank" className="legal-space">Terms of Sale</a>
                            <a href="" target="blank" className="legal-space">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//This is the font awesome only being able to take on one css so inline are necessary

const footerIcons = {
    color: "white",
    fontSize: "2.2em",
    marginRight: '10px'
}

export default Footer;