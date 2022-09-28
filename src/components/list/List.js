import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Personal from '../personalDetails/Personal';
import Break from '../Break/Break';
import Practise from '../practiseDetails/Practise';
import { addToDB, getFromDB } from '../../utility/manageDB';

import "./List.css"

const List = () => {
    const [breakTime, setBreakTime] = useState(0)

    useEffect(() => {
        const getItem = getFromDB()
        if (getItem) {
            setBreakTime(getItem.breaktime)
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
        addToDB(time)
    }
    return (
        <div className='list'>
            <Personal></Personal>
            <Break updatedBreakTime={updatedBreakTime}></Break>
            <Practise breakTime={breakTime}></Practise>
            <div>
                <button className='activity-btn' onClick={showToastMessage}>Activity Completed</button>
                <ToastContainer />
            </div>

        </div>
    );
};

export default List;