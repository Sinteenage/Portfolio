import React, { useCallback, useEffect, useRef } from 'react';

import { About } from '../about/About';
import { Contacts } from '../contacts/Contacts';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Work } from '../work/Work';

import './nav.css';

export const ScrollWrapper: React.FC = () => {

    const body = document.body;
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const speed = 0.04;
    const heightRef = useRef(0);
    const offsetRef = useRef(0);

    const onResizeWindow = useCallback(() => {
        if(wrapperRef.current) {
            heightRef.current = wrapperRef.current.getBoundingClientRect().height - 1;
        }

        body.style.height = Math.floor(heightRef.current) + 'px';
    }, [body.style]);

    const smoothScroll = useCallback(() => {

        offsetRef.current += (window.scrollY - offsetRef.current) * speed;

        const scroll = 'translateY(-' + offsetRef.current + 'px) translateZ(0)';

        if(wrapperRef.current){
            wrapperRef.current.style.transform = scroll;
        }

        requestAnimationFrame(smoothScroll);
    }, []);

    useEffect(() => {
        if(wrapperRef.current){
            heightRef.current = wrapperRef.current.getBoundingClientRect().height - 1;
        }

        body.style.height = Math.floor(heightRef.current) + 'px';

        smoothScroll();

        window.addEventListener('resize', onResizeWindow);

        return () => {
            window.removeEventListener('resize', onResizeWindow);
        };
    }, [smoothScroll, body.style, onResizeWindow]);

    return (
        <div ref={wrapperRef} className='container__smooth-sclroll'>
            <Header/>
            <About/>
            <Work/>
            <Contacts/>
            <Footer/>
        </div>
    );
};