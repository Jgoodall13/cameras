import React from 'react';
import Hero from './Hero'
import Specs from './Specs'

const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <Specs />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;