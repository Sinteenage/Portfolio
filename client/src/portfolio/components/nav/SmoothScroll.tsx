import React, { useCallback, useEffect, useRef } from 'react';

import { About } from '../about/About';
import { Contacts } from '../contacts/Contacts';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Work } from '../work/Work';

import './scroll.css';

export const ScrollWrapper: React.FC = () => {

    const body = document.body;
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const speed = 0.04;
    const heightRef = useRef(0);
    const offsetRef = useRef(0);

    const smoothScroll = useCallback(() => {
        offsetRef.current += (window.pageYOffset - offsetRef.current) * speed;

        let scroll = 'translateY(-' + offsetRef.current + 'px) translateZ(0)';

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

        console.log('height: ' + heightRef.current);
        console.log('wrapper: ' + wrapperRef.current);

        smoothScroll();
    }, [smoothScroll, body.style]);

    return (
        <div ref={wrapperRef} className='container__smooth-sclroll'>
            <Header/>
            <About/>
            <Work/>
            <Contacts/>
            <Footer/>
        </div>
    );
}