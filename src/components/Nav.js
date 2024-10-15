// src/components/Nav.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css'; // Import the CSS file

const Nav = () => {
    const navigate = useNavigate();
    const dropdownRef = React.useRef(null); // Create a ref for the dropdown

    const families = [
        'Amfibet dhe Reptilet', 'Coleoptera', 'Ephemeroptera', 
        'Gjitaret', 'Hemiptera Diptera Mecoptera', 'Lepidoptera', 
        'Merimangat', 'Odonata', 'Pakurrizoret tjerë', 
        'Peshqit', 'Plecoptera', 'Shpendet', 'Trichoptera'
    ];

    return (
        <div className='nav-bar'>
            <ul className='nav-list'>
                <li className='nav-item' onClick={() => navigate('/')}>Home</li>
                <li className='nav-item' onClick={() => navigate('/references')}>References</li>
                <li 
                    className='nav-item' 
                    onMouseEnter={() => dropdownRef.current.style.display = 'block'} 
                    onMouseLeave={() => dropdownRef.current.style.display = 'none'}
                >
                    Famiiljet {'>'}
                    <ul 
                        ref={dropdownRef} 
                        style={{ display: 'none', position: 'absolute', backgroundColor: '#333', color: 'white', padding: '10px', borderRadius: '5px' }}
                    >
                        {families.map((family, index) => (
                            <li key={index} onClick={() => navigate(`/families/${family}`)}>{family}</li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Nav;
