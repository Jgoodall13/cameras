import React from 'react';


const index = () => {
    topFunction();
    return (
        <div>
            Order Now
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;