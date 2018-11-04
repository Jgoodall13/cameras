import React from 'react';
import { Link } from 'react-router-dom';


const Hamburger = (props) => {
    return (
        <div className="hamburger-menu col-xs-6">
            <Link to="/products/hydra" className="mobile-link" onClick={() => this.props.goAway()}>Hydra</Link><br />
            <Link to="/products/monstar" className="mobile-link" onClick={() => this.props.goAway()}>Monstar</Link><br />
            <Link to="/products/maxx" className="mobile-link" onClick={() => this.props.goAway()}>Maxx</Link><br />
            <Link to="/about" className="mobile-link" onClick={() => this.props.goAway()}>About</Link><br />
            <Link to="/faqs" className="mobile-link" onClick={() => this.props.goAway()}>FAQ</Link><br />
            <Link to="/order" className="mobile-link" onClick={() => this.props.goAway()}>Order Now</Link><br />
        </div>
    )
}

export default Hamburger;