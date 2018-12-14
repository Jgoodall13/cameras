import React from 'react';
import { Link } from 'react-router-dom';
import Manuel from '../../../images/MaxxMonstarManuel.pdf';
import Step from '../../../images/step/Monstar.STEP';

const Specs = () => {
    return (
        <div className="container monstar-specs">
            <div className="row">
                <div className="col-md-4">
                    <h3 style={{fontSize: '40px', color: "#696969", marginTop: '0', fontFamily: 'Quicksand'}}>Product Highlights</h3>
                </div>
                <div className="col-md-8">
                    <ul>
                        <li className="spec-list">Range up to 6m</li>
                        <li className="spec-list">Power and communication over USB 3.0</li>
                        <li className="spec-list">High-resolution 100 kpixel sensor</li>
                        <li className="spec-list">Expansion port with MIPI and parallel interfaces</li>
                        <li className="spec-list">Three Fields of View: 100° x 85°, 80° x 60° or 60° x 45°</li>
                        <li className="spec-list">Available optimized for indoor or outdoor use</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="row" style={{marginTop: '20px'}}>
                    <div className="col-md-4 button-links">
                        <a href={Manuel} target="blank" className="donwload-button">Download Data-Sheet</a>
                    </div>
                    <div className="col-md-4 button-links">
                        <Link className="product-contact-button" to="/order">Order Now</Link>
                    </div>
                    <div className="col-md-4 button-links">
                        <a href={Step} className="donwload-button" download>Download Step-File</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specs;