import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loading } from './portfolio/actions';
import { Header } from './portfolio/components/header/Header';
import { Preloader } from './portfolio/components/preloader/Preloader';
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
      {(preloader.loading === LoadingState.REQUEST) ? <Preloader /> : <Header />}
    </>
  );
}

export default App;
