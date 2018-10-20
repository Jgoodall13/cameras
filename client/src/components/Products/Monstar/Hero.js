import React from 'react';
import MonstarImg from '../../../images/Monstar.png'
import '../../../styles/monstar.css'

const Hero = () => {
    return (
        <div className="container monstar-hero">
            <div className="monstar-banner">
                <h2 style={{fontSize: '65px', color: '#696969'}}>Monstar</h2>
                <p className="monstar-cta">The FusionSens Monstar is a high performance time of flight camera optimized for cutting edge industrial and robotic applications. It offers best in class performance for performance and range.</p>
                <img src={MonstarImg} alt="Monstar" className="monstar-img" />
            </div>
            <div className="monstar-downloads row">
                <div className="col-md-6 monstar-data-div">
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