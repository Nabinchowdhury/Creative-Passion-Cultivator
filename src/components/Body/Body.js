import React, { useEffect, useState } from 'react';
import List from '../list/List';
import "./Body.css"
const Body = () => {
    const [passions, setPassion] = useState()
    useEffect(() => {
        fetch("../.././fakedb.json")
            .then(res => res.json())
            .then(data => setPassion(data))
    }, [])
    console.log(passions)
    return (
        <div className='body'>

            <div className='instruments'>
                <h2>Select Your Passion</h2>


            </div>
            <div className='listed-passions'>
                <List></List>
            </div>
        </div>
    );
};

export default Body;