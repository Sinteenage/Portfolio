import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { useResize } from '../../hooks/useResize';
import { getWorkItems } from '../../selectors';
import { About } from '../about/About';
import { Contacts } from '../contacts/Contacts';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { Work } from '../work/Work';

import './nav.css';

export const ScrollWrapper: React.FC = () => {

    const animIdRef = useRef(0);

    const { loading } = useSelector(getWorkItems);

    const body = document.body;
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const speed = 0.05;
    const heightRef = useRef(0);
    const offsetRef = useRef(0);
    const { width } = useResize();

    const smoothScroll = useCallback(() => {

        offsetRef.current += (window.scrollY - offsetRef.current - 1) * speed;

        const scroll = 'translateY(-' + offsetRef.current + 'px) translateZ(0)';

        if(wrapperRef.current){
            wrapperRef.current.style.transform = scroll;
        }

        animIdRef.current = requestAnimationFrame(smoothScroll);
    }, []);

    useEffect(() => {
        if(wrapperRef.current){
            heightRef.current = wrapperRef.current.getBoundingClientRect().height - 1;
        }

        body.style.height = Math.floor(heightRef.current) + 'px';

    }, [body.style, width, loading]);

    useEffect(() => {
        animIdRef.current = requestAnimationFrame(smoothScroll);

        return () => {
            cancelAnimationFrame(animIdRef.current);
        };
    }, [smoothScroll]);

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