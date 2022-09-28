import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Personal from '../personalDetails/Personal';
import Break from '../Break/Break';
import Practise from '../practiseDetails/Practise';
import { addToDB, getFromDB } from '../../utility/manageDB';

import "./List.css"

const List = ({ duration }) => {
    const [breakTime, setBreakTime] = useState(0)

    useEffect(() => {
        const getItem = getFromDB()
        // console.log(getItem)
        if (getItem) {
            setBreakTime(getItem.breakTime
            )
        }
        else { setBreakTime(0) }
    }, [])

    const showToastMessage = () => {
        toast.success('Congratulation ! Activity Completed!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const updatedBreakTime = (time) => {
        setBreakTime(time)
        addToDB('breakTime', time)
    }
    return (
        <div className='list'>
            <Personal></Personal>
            <Break updatedBreakTime={updatedBreakTime}></Break>
            <Practise breakTime={breakTime} duration={duration}></Practise>
            <div>
                <button className='activity-btn' onClick={showToastMessage}>Activity Completed</button>
                <ToastContainer />
            </div>

        </div>
    );
};

export default List;