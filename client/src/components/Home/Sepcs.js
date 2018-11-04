import React from 'react';

const Specs = () => {
    return (
        <div className="container specs">
            <div className="row">
                <div className="col-md-5 line-break">
                </div>
                <div className="col-md-2">
                    <h4 className="specs-title">SPECS</h4>
                </div>
                <div className="col-md-5 line-break">
                </div>
            </div>
            <ul className="spec-ul">
                <li className="spec-li">100,000 pixel resolution</li>
                <li className="spec-li">Up to 10 meter range</li>
                <li className="spec-li">1% depth accuracy</li>
                <li className="spec-li">Indoor and Outdoor operation</li>
                <li className="spec-li">Gigabit Ethernet and USB 3.0 interface options</li>
                <li className="spec-li">Up to 60 fps operation</li>
            </ul>
        </div>
    )
}

export default Specs;