import React from 'react';
import "./Break.css"

const Break = ({ updatedBreakTime }) => {
    return (
        <div>
            <h3>Add a Break</h3>
            <div className='break'>

                <div onClick={() => updatedBreakTime(10)}><span>10</span>min</div>
                <div onClick={() => updatedBreakTime(20)}><span>20</span>min</div>
                <div onClick={() => updatedBreakTime(30)}><span>30</span>min</div>
                <div onClick={() => updatedBreakTime(60)}><span>60</span>min</div>
            </div>
        </div>
    );
};

export default Break;