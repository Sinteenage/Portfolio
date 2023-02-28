import React from 'react';
import {
    FiBook,
    FiHome,
    FiUser,
    FiMessageSquare
} from 'react-icons/fi'

import './nav.css';

export const Nav: React.FC = () => {
    return (
        <nav>
            <a href="#"><FiHome/></a>
            <a href="#about"><FiUser/></a>
            <a href="#portfolio"><FiBook/></a>
            <a href="#contacts"><FiMessageSquare/></a>
        </nav>
    );
}