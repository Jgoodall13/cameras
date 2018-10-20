import React from 'react';
import MaxxImg from '../../../images/Maxx.png'
import '../../../styles/maxx.css'

const Hero = () => {
    return (
        <div className="container maxx-hero">
            <div className="maxx-banner">
                <h2 style={{fontSize: '65px', color: '#696969'}}>Maxx</h2>
                <p className="maxx-cta">The FusionSens Maxx is a compact time of flight camera optimized for edge industrial, AR/VR, and robotic applications.</p>
                <img src={MaxxImg} alt="Maxx" className="maxx-img" />
            </div>
            <div className="maxx-downloads row">
                <div className="col-md-6 maxx-data-div">
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