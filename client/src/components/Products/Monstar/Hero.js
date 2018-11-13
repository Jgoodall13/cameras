import React from 'react';
import MonstarImg from '../../../images/Monstar.png'
import Slide from 'react-reveal/Slide';
import '../../../styles/monstar.css'

const Hero = () => {
    return (
        <div className="container monstar-hero">
            <div className="monstar-banner row">
                <div className="col-md-6">
                        <h2 className="monstar-title">Monstar</h2>
                    <p className="monstar-cta">The FusionSens Monstar is a high performance time of flight camera optimized for cutting edge industrial and robotic applications. It offers best in class performance for performance and range.</p>
                </div>
                <div className="col-md-6">
                    <img src={MonstarImg} alt="Monstar" className="monstar-img" />
                </div>
            </div>
        </div>
    )
}

export default Hero;