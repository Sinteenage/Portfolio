import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useISObserver } from '../../hooks/useISObserver';
import { useResize } from '../../hooks/useResize';
import { getWorkItems } from '../../selectors';
import { sections } from '../../types';

import './nav.css';

export const Nav: React.FC = () => {

    const { loading } = useSelector(getWorkItems);

    const [activeNav, setActiveNav] = useState('#home');
    const { width } = useResize();
    const activeId = useISObserver(sections, 0.5);

    const onChangeSection = useCallback((elementId: string, position: number) => {
        setActiveNav(elementId);
        window.scrollTo(0, position);
    }, []);

    useEffect(() => {
        sections.forEach((item) => {
            const element = document.getElementById(item.id);

            element && (item.position = element.offsetTop);
        });
    }, [width, loading]);

    useEffect(() => {
        setActiveNav(activeId);
    }, [activeId]);

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