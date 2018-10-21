import React from 'react';
import Hero from './Hero'

const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;