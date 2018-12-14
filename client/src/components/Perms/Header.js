import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import Support from './Support';
import Hamburger from './Hamburger';

import Logo from '../../images/logo.png'

class Header extends Component{

    state = {
        hamburger: false
    }

    handleClick = () => {
        this.setState({hamburger: !this.state.hamburger})
    }

    render(){
        return (
            <div className="headers-div">
                <div className="container header-desktop">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="/"><img src={Logo} style={{height: '90px', width: '90px', paddingTop: '10px'}} alt="main-logo" /></Link>
                        </div>
                        <div className="col-md-9">
                            <nav className='header-nav'>
                                <span id="product-drop" className="nav-links"><Dropdown /></span>
                                <span id="product-drop-two" className="nav-links"><Support /></span>
                                <a className="contact-button" href="/order">Order Now</a>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container header-mobile">
                    <div className="row">
                        {this.state.hamburger === true ? <Hamburger goAway={this.handleClick} /> :
                        <div className='col-xs-6'>
                            <Link to="/"><img src={Logo} style={{height: '100px', width: '100px'}} alt="main-logo" /></Link>
                        </div>
                        }
                        <div className='col-xs-6 hamburger'>
                            <i onClick={() => this.handleClick()} className="fa fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;