import React from 'react';

import '../../styles/about.css'

const Hero = () => {
    return (
        <div className="conatiner-fluid about-hero">
            <div className="about-banner">
            </div>
            <div className="about-info">
                <h2 className="about-title">About Us</h2>
                <p className="about-paragraph">The FusionSens line of cameras were developed by <a href="http://www.gener8.net" target="blank">Gener8</a> using technology developed by <a href="https://www.infineon.com/cms/en/product/sensor/3d-image-sensor-real3/" target="blank">Infineon</a> and pmd technologies <a href="https://pmdtec.com" target="blank">pmdtec.com</a></p>
            </div>
        </div>
    )
}

export default Hero