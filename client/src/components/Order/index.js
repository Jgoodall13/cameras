import React from 'react';
import Title from './Title.js'
import Form from './Form'

const index = () => {
    topFunction();
    return (
        <div>
            <Title />
            <Form />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;