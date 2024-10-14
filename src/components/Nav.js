// src/components/Nav.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css'; // Import the CSS file

const Nav = () => {
    const navigate = useNavigate();

    return (
        <div className='nav-bar'>
            <ul className='nav-list'>
                <li className='nav-item' onClick={() => navigate('/')}>Home</li>
                <li className='nav-item' onClick={() => navigate('/references')}>References</li>
                <li className='nav-item' onClick={() => navigate('/species')}>Speciet</li>
            </ul>
        </div>
    );
};

export default Nav;

