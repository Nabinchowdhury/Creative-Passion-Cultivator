import React from 'react';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <h1><FontAwesomeIcon icon={faGuitar}></FontAwesomeIcon> Boost Your Creativity, Build Your Passion...</h1>
        </div >
    );
};

export default Header;