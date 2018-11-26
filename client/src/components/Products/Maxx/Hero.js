import React from 'react';
import MaxxImg from '../../../images/Maxx.png'
import '../../../styles/maxx.css'

const Hero = () => {
    return (
        <div className="container maxx-hero">
            <div className="maxx-banner row">
                <div className="col-md-6">
                        <h2 className="maxx-title">Maxx</h2>
                    <p className="maxx-cta">The FusionSens Maxx is a compact time of flight camera optimized for edge industrial, AR/VR, and robotic applications.</p>
                </div>
                <div className="col-md-6">
                    <img src={MaxxImg} alt="Maxx" className="maxx-img" />
                </div>
            </div>
        </div>
    )
}

export default Hero;