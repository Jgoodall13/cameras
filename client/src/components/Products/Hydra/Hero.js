import React from 'react';
import HydraImg from '../../../images/Hydra.png'

import '../../../styles/hydra.css'

const Hero = () => {
    return (
        <div className="container hydra-hero">
            <div className="hydra-banner">
                <h2 style={{fontSize: '65px', color: '#696969'}}>Hydra</h2>
                <p className="hydra-cta">The FusionSens Hydra is an enhanced performance smart Time of Flight camera optimized for use in automotive and industrial environments. It offers best in class performance for performance, range and robustness.</p>
                <img src={HydraImg} alt="hydra" className="hydra-img" />
            </div>
            <div className="hydra-downloads row">
                <div className="col-md-6 hydra-data-div">
                    <a href="" target="blank" className="donwload-button">Download Data-Sheet</a>
                </div>
                <div className="col-md-6">
                    <a href="" target="blank" className="donwload-button">Download Step-File</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;