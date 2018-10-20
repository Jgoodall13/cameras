import React from 'react';
import Carousel from './Carousel';
import SenseBox from './SenseBox';
import Specs from './Sepcs'



const index = () => {
    topFunction();
    return (
        <div>
            <Carousel />
            <SenseBox />
            <Specs />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;