import React from 'react';
import YetiImg from '../../../images/Yeti.png'
import '../../../styles/yeti.css'

const Hero = () => {
    return (
        <div className="container yeti-hero">
            <div className="yeti-banner">
                <h2 style={{fontSize: '65px', color: '#696969'}}>Yeti</h2>
                <p className="yeti-cta">The FusionSens Monstar Yeti is a Smart Camera version of the Monstar that output point cloud data on a gigabit Ethernet interface.</p>
                <img src={YetiImg} alt="Yeti" className="yeti-img" />
            </div>
            <div className="yeti-downloads row">
                <div className="col-md-6 yeti-data-div">
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