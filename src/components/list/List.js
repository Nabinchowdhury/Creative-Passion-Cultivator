import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Personal from '../personalDetails/Personal';
import Break from '../Break/Break';
import Practise from '../practiseDetails/Practise';

import "./List.css"

const List = () => {

    const showToastMessage = () => {
        toast.success('Congratulation ! Activity Completed!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const updatedBreakTime = (event) => {
        console.log(event)
    }
    return (
        <div className='list'>
            <Personal></Personal>
            <Break updatedBreakTime={updatedBreakTime}></Break>
            <Practise></Practise>
            <div>
                <button className='activity-btn' onClick={showToastMessage}>Activity Completed</button>
                <ToastContainer />
            </div>

        </div>
    );
};

export default List;