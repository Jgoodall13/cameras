import React from 'react';
import { Link } from 'react-router-dom';
import Manuel from '../../../images/HydraManuel.pdf';
import Step from '../../../images/step/Hydra.STEP';

const Specs = () => {
    return (
        <div className="container hydra-specs">
            <div className="row">
                <div className="col-md-4">
                    <h3 style={{fontSize: '40px', color: "#696969", marginTop: '0', fontFamily: 'Quicksand'}}>Product Highlights</h3>
                </div>
                <div className="col-md-8">
                    <ul>
                        <li className="spec-list">Optimized for indoor and outdoor, direct sunlight use</li>
                        <li className="spec-list">Gigabit Ethernet</li>
                        <li className="spec-list">Onboard processing delivers point cloud data directly</li>
                        <li className="spec-list">Range up to 10m</li>
                        <li className="spec-list">Frame rate up to 30fps</li>
                        <li className="spec-list">High-resolution 100 kpixel sensor</li>
                        <li className="spec-list">Wide 100 x 85deg field of view</li>
                        <li className="spec-list">-40 to 105degC operating range</li>
                        <li className="spec-list">IP67 Enclosure</li>
                    </ul>
                </div>
            </div>
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
    )
}

export default Specs;