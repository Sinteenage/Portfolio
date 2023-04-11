import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getWorks } from './portfolio/actions';
import { Nav } from './portfolio/components/nav/Nav';
import { ScrollWrapper } from './portfolio/components/nav/SmoothScroll';
import { Header } from './portfolio/components/header/Header';
import { About } from './portfolio/components/about/About';
import { Work } from './portfolio/components/work/Work';
import { Contacts } from './portfolio/components/contacts/Contacts';
import { Footer } from './portfolio/components/footer/Footer';

const App: React.FC = () => {
    const dispatch = useDispatch();
  
    const initRequest = useCallback(() => {
        dispatch(getWorks.request());
    }, [dispatch]);

    useEffect(() => initRequest(), [initRequest]);

    return (
        <>
            <Nav/>
            { (/Android | iPhone | iPad | iPod | webOS | BlackBerry/i.test(navigator.userAgent)) ?
                <>
                    <Header/>
                    <About/>
                    <Work/>
                    <Contacts/>
                    <Footer/>
                </> :
                <>
                    <ScrollWrapper/>
                </>
            }
        </>
    );
};

export default App;
