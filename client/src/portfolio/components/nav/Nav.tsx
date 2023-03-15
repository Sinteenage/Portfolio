import React, { useCallback, useEffect, useState } from 'react';

import { sections } from '../../types';

import './nav.css';

export const Nav: React.FC = () => {

    const [activeNav, setActiveNav] = useState('#home');

    const onChangeSection = useCallback((activeNav: string, position: number) => {
        setActiveNav(activeNav);
        window.scrollTo(0, position);
    }, []);

    const onResizeWindow = useCallback(() => {
        sections.forEach((item) => {
            const element = document.getElementById(item.id);
            if(element) {
                item.position = element.getBoundingClientRect().y + window.scrollY;
            }
        });
    }, []);

    useEffect(() => {
        window.addEventListener('resize', onResizeWindow);

        return () => {
            window.removeEventListener('resize', onResizeWindow);
        };
    }, [onResizeWindow]);

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setActiveNav(`#${entry.target.id}`);
                }
            });
        }, {
            threshold: 0.5,
        });

        sections.forEach((item) => {
            const element = document.getElementById(item.id);
            if(element) {
                observer.observe(element);
                item.position = element.getBoundingClientRect().y + window.scrollY;
            }
        });

        return () => {
            sections.forEach((item) => {
                const element = document.getElementById(item.id);
                if(element)
                    observer.unobserve(element); 
            });
        };
        
    }, []);

    return (
        <nav>
            {sections.map((item) => {
                return <button
                    key={item.key}
                    onClick={() => onChangeSection(`#${item.id}`, item.position)}
                    className={activeNav === `#${item.id}` ? 'active' : ''}
                >
                    <item.icon/>
                </button>;
            })}
        </nav>
    );
};