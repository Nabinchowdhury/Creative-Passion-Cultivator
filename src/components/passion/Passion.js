import React from 'react';
import "./Passion.css"

const Passion = ({ passion }) => {
    const { id, activity, img, duration } = passion
    console.log(passion)
    return (
        <div className='passion'>
            <img src={img} alt="" />
            <div className='passion-details'>
                <h4>{activity}</h4>
                <p>Time Required: {duration}</p>
            </div>
            <button className='select-btn'>Select Passion</button>
        </div>
    );
};

export default Passion; 