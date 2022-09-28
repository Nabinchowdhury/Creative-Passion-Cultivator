import React from 'react';
import "./Personal.css"

const Personal = () => {
    return (
        <div>
            <div className='personal-details'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Dreamtheater_-_Wacken_Open_Air_2015-1607.jpg/1200px-Dreamtheater_-_Wacken_Open_Air_2015-1607.jpg" alt="" />
                <div>
                    <h4>Nabin Chowdhury</h4>
                    <small>Chattogram</small>
                </div>
            </div>
            <div className='about'>
                <div>
                    <h3>26 <small>yrs</small></h3>
                    <p>Age</p>
                </div>
                <div>
                    <h3>Guitar</h3>
                    <p>Passion</p>
                </div>
            </div>
        </div>
    );
};

export default Personal;