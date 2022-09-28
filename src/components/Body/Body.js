import React, { useEffect, useState } from 'react';
import Passion from '../passion/Passion';
import List from '../list/List';
import "./Body.css"
const Body = () => {
    const [passions, setPassion] = useState([])
    const [durations, setDuration] = useState([])
    useEffect(() => {
        fetch("../../fakedb.json")
            .then(res => res.json())
            .then(data => setPassion(data))
    }, [])
    // console.log(passions)
    const addToList = ({ duration }) => {
        let array = []
        array = [...durations, duration]
        setDuration(array)
    }

    return (
        <div className='body'>

            <div >
                <h2>Select Your Passion</h2>
                <div className='passions'>{
                    passions.map(passion => <Passion passion={passion} addToList={addToList} key={passion.id}></Passion>)
                }</div>

            </div>
            <div className='listed-passions'>
                <List duration={durations}></List>
            </div>
        </div>
    );
};

export default Body;