import React from 'react';
import "./Passion.css"

const Passion = ({ passion, addToList }) => {
    const { id, activity, img, duration } = passion
    console.log(passion)
    return (
        <div className='passion'>
            <img src={img} alt="" />
            <div className='passion-details'>
                <h4>{activity}</h4>
                <p>Time Required: {duration} min</p>
            </div>
            <button className='select-btn' onClick={() => addToList(passion)}>Select Passion</button>
        </div>
    );
};

export default Passion; 