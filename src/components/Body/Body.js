import React, { useEffect, useState } from 'react';
import Passion from '../passion/Passion';
import List from '../list/List';
import "./Body.css"
const Body = () => {
    const [passions, setPassion] = useState([])
    useEffect(() => {
        fetch("../../fakedb.json")
            .then(res => res.json())
            .then(data => setPassion(data))
    }, [])
    // console.log(passions)
    const addToList = ({ duration }) => {
        console.log(duration)
    }
    return (
        <div className='body'>

            <div >
                <h2>Select Your Passion</h2>
                <div className='instruments'>{
                    passions.map(passion => <Passion passion={passion} addToList={addToList} key={passion.id}></Passion>)
                }</div>

            </div>
            <div className='listed-passions'>
                <List></List>
            </div>
        </div>
    );
};

export default Body;