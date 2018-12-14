import React from 'react';
import MonstarImg from '../../../images/Monstar.png'
import '../../../styles/monstar.css'

const Hero = () => {
    return (
        <div className="container monstar-hero">
            <div className="monstar-banner row">
                <div className="col-md-6">
                        <h2 className="monstar-title">Monstar</h2>
                    <p className="monstar-cta">FusionSens Monstar high-performance time of flight camera enables 3D imaging for industrial automation, robotics and is easy to integrate with any system.  Best-in-class performance and range.</p>
                </div>
                <div className="col-md-6">
                    <img src={MonstarImg} alt="Monstar" className="monstar-img" />
                </div>
            </div>
        </div>
    )
}

export default Hero;