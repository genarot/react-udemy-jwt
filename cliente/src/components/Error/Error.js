import React from 'react'
import './style.css';

const Error = function(props) {
    return ( 
        <div>
            {props.children}
        </div>
    );
}

export default Error;