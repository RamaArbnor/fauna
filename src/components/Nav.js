// src/components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Import the CSS file

const Nav = () => {
    return (
        <div className='nav-bar'>
            <ul className='nav-list'>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>Placeholder</li>
                <li className='nav-item'>References</li>
            </ul>
        </div>
    );
};

export default Nav;

