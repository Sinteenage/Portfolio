import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loading } from './portfolio/actions';
import { Nav } from './portfolio/components/nav/Nav';
import { ScrollWrapper } from './portfolio/components/nav/SmoothScroll';

const App: React.FC = () => {
    const dispatch = useDispatch();
  
    const initRequest = useCallback(() => {
        dispatch(loading.request());
    }, [dispatch]);

    useEffect(() => initRequest(), [initRequest]);

    return (
        <>
            <ScrollWrapper/>
            <Nav/>
        </>
    );
};

export default App;
