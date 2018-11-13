import React from 'react';
import { Link } from 'react-router-dom';

const Specs = () => {
    return (
        <div className="container monstar-specs">
            <div className="row">
                <div className="col-md-4">
                    <h3 style={{fontSize: '40px', color: "#696969", marginTop: '0', fontFamily: 'Quicksand'}}>Product Highlights</h3>
                </div>
                <div className="col-md-8">
                    <ul>
                        <li className="spec-list">100 kpixel resolution</li>
                        <li className="spec-list">6 m range</li>
                        <li className="spec-list">USB 3.0 powered</li>
                        <li className="spec-list">Expansion port with MIPI and parallel interface</li>
                        <li className="spec-list">100° x 85°, 80° x 60°, and 60° x 45° Field of View Options</li>
                        <li className="spec-list">Indoor and outdoor optimized versions available</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="row" style={{marginTop: '20px'}}>
                    <div className="col-md-4 button-links">
                        <a href="" target="blank" className="donwload-button">Download Data-Sheet</a>
                    </div>
                    <div className="col-md-4 button-links">
                        <Link className="product-contact-button" to="/order">Order Now</Link>
                    </div>
                    <div className="col-md-4 button-links">
                        <a href="" target="blank" className="donwload-button">Download Step-File</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specs;