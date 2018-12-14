import React from 'react';
import MaxxImg from '../../../images/Maxx.png'
import '../../../styles/maxx.css'

const Hero = () => {
    return (
        <div className="container maxx-hero">
            <div className="maxx-banner row">
                <div className="col-md-6">
                        <h2 className="maxx-title">Maxx</h2>
                    <p className="maxx-cta">FusionSens Maxx compact time of flight cameras are the ideal 3D imager for edge industrial, AR, VR, mobile and robotics.</p>
                </div>
                <div className="col-md-6">
                    <img src={MaxxImg} alt="Maxx" className="maxx-img" />
                </div>
            </div>
        </div>
    )
}

export default Hero;