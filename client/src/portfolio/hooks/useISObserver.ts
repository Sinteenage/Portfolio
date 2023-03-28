import { useEffect, useState } from 'react';

import { ISection } from '../types';

export const useISObserver = (targets: ISection[], threshold: number = 0.3) => {

    const [activeElementId, setActive] = useState('#home');
    
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setActive(`#${entry.target.id}`);
                }
            });
        }, {
            threshold,
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
    }, [targets, threshold]);

    return activeElementId;
};