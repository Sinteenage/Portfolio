import React, { useState } from 'react';
import {
    FiBook,
    FiHome,
    FiUser,
    FiMessageSquare
} from 'react-icons/fi'

import './nav.css';

export const Nav: React.FC = () => {

    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><FiHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FiUser/></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FiBook/></a>
            <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><FiMessageSquare/></a>
        </nav>
    );
}