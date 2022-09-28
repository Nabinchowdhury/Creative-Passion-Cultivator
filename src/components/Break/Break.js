import React from 'react';
import "./Break.css"

const Break = ({ updatedBreakTime }) => {
    return (
        <div>
            <h3>Add a Break in minutes</h3>
            <div className='break'>

                <div onClick={() => updatedBreakTime(0)}><span>0</span></div>
                <div onClick={() => updatedBreakTime(10)}><span>10</span></div>
                <div onClick={() => updatedBreakTime(20)}><span>20</span></div>
                <div onClick={() => updatedBreakTime(30)}><span>30</span></div>
                <div onClick={() => updatedBreakTime(60)}><span>60</span></div>
            </div>
        </div>
    );
};

export default Break;