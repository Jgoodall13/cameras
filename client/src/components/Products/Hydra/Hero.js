import React from 'react';
import HydraImg from '../../../images/Hydra.png'
import Slide from 'react-reveal/Slide';
import '../../../styles/hydra.css'

const Hero = () => {
    return (
        <div className="container hydra-hero">
            <div className="hydra-banner row">
                <div className="col-md-6">
                        <h2 className="hydra-title">Hydra</h2>
                    <p className="hydra-cta">The FusionSens Hydra is an enhanced performance smart Time of Flight camera optimized for use in automotive and industrial environments. It offers best in class performance for performance, range and robustness.</p>
                </div>
                <div className="col-md-6">
                    <img src={HydraImg} alt="hydra" className="hydra-img" />
                </div>
            </div>
        </div>
    )
}

export default Hero;