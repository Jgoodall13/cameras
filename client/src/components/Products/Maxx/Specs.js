import React from 'react';
import { Link } from 'react-router-dom';

const Specs = () => {
    return (
        <div className="container maxx-specs">
            <div className="row">
                <div className="col-md-4">
                    <h3 style={{fontSize: '40px', color: "#696969", marginTop: '0'}}>Product Highlights</h3>
                </div>
                <div className="col-md-8">
                    <ul>
                        <li className="spec-list">100 kpixel resolution</li>
                        <li className="spec-list">4 m range</li>
                        <li className="spec-list">USB 3.0 powered</li>
                        <li className="spec-list">00° x 85°, 80° x 60°, and 60° x 45° Field of View Options</li>
                        <li className="spec-list">Indoor and outdoor optimized versions available</li>
                    </ul>
                </div>
                <div className="col-xs-12 cta-div">
                    <Link className="contact-button" to="/order">Order Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Specs;