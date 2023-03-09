import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loading } from './portfolio/actions';
import { About } from './portfolio/components/about/About';
import { Contacts } from './portfolio/components/contacts/Contacts';
import { Footer } from './portfolio/components/footer/Footer';
import { Header } from './portfolio/components/header/Header';
import { Nav } from './portfolio/components/nav/Nav';
import { Preloader } from './portfolio/components/preloader/Preloader';
import { Work } from './portfolio/components/work/Work';
import { getPreloader } from './portfolio/selectors';
import { LoadingState } from './portfolio/types';

const App: React.FC = () => {

  const dispatch = useDispatch();
  const preloader = useSelector(getPreloader);

  const initRequest = useCallback(() => {
    dispatch(loading.request());
  }, [dispatch]);

  useEffect(() => initRequest(), [initRequest]);

  return (
    <>
      {(preloader.loading === LoadingState.REQUEST) ? <Preloader /> : 
        <>
          <Header/>
          <Nav/>
          <About/>
          <Work/>
          <Contacts/>
          <Footer/>
        </>
      }
    </>
  );
}

export default App;
