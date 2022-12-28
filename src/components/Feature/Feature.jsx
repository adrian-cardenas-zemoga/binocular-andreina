import React from 'react';
import './Feature.css';

function Feature(props) {
    return (
        <div className="feature">
            <img src={props.icon} alt={props.title} />
            <h1 className='feature-title'>{props.title}</h1>
            <p className='feature-description'>{props.description}</p>
        </div>
    )
}

export default Feature;