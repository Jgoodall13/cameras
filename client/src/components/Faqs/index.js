import React from 'react';
import Hero from './Hero';
import Questions from './Questions'

const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <Questions />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;