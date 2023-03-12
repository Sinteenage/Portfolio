import React, { useCallback, useState } from 'react';
import {
    FiBook,
    FiHome,
    FiUser,
    FiMessageSquare
} from 'react-icons/fi'

import './nav.css';

export const Nav: React.FC = () => {

    const [activeNav, setActiveNav] = useState('#home');

    const onChangeSection = useCallback((activeNav: string, position: number) => {
        setActiveNav(activeNav);
        window.scrollTo(0, position);
    }, []);

    return (
        <nav>
            <button 
                onClick={() => onChangeSection('#home', 0)}
                className={activeNav === '#home' ? 'active' : ''}
            ><FiHome/></button>
            <button 
                onClick={() => onChangeSection('#about', 710)} 
                className={activeNav === '#about' ? 'active' : ''}
            ><FiUser/></button>
            <button 
                onClick={() => onChangeSection('#portfolio', 1450)}
                className={activeNav === '#portfolio' ? 'active' : ''}
            ><FiBook/></button>
            <button 
                onClick={() => onChangeSection('#contacts', 2160)} 
                className={activeNav === '#contacts' ? 'active' : ''}
            ><FiMessageSquare/></button>
        </nav>
    );
}