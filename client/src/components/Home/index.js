import React from 'react';
import Carousel from './Carousel'


const index = () => {
    topFunction();
    return (
        <div>
            <Carousel />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;