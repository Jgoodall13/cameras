import React from 'react';
import HydraImg from '../../../images/Hydra.png'
import '../../../styles/hydra.css'

const Hero = () => {
    return (
        <div className="container hydra-hero">
            <div className="hydra-banner row">
                <div className="col-md-6">
                        <h2 className="hydra-title">Hydra</h2>
                    <p className="hydra-cta">FusionSens Hydra is optimized for automotive and industrial environments and streams point cloud data over Ethernet for seamless integration into your software environment.  Best-in-class performance, range and robustness.</p>
                </div>
                <div className="col-md-6">
                    <img src={HydraImg} alt="hydra" className="hydra-img" />
                </div>
            </div>
        </div>
    )
}

export default Hero;