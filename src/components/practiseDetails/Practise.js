import React from 'react';
import './Practise.css'
const Practise = ({ breakTime }) => {
    return (
        <div>
            <h3>Practise Details</h3>
            <div className='practise-time'>

                <h4>Practise Time:</h4>
            </div>
            <div className='break-time'>
                <h4>Break Time: {breakTime} min</h4>
            </div>
        </div>
    );
};

export default Practise;