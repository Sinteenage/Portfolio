import { useEffect, useState } from 'react';

import { Section } from '../types';

export const useISObserver = (targets: Section[]) => {
    const [activeElementId, setActive] = useState('#home');

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.isIntersecting && setActive(`#${entry.target.id}`);
            });
        }, {
            threshold: 0.3,
        });

        targets.forEach((item) => {
            const element = document.getElementById(item.id);
            element && observer.observe(element);
        });

        return () => {
            targets.forEach((item) => {
                const element = document.getElementById(item.id);
                element && observer.unobserve(element); 
            });
        };
        
    }, [targets]);

    return activeElementId;
};