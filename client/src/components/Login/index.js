import React from 'react';
import Auth from './Auth'

const index = () => {
    topFunction();
    return (
        <div>
            <Auth />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;