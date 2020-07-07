import React, { Suspense } from 'react';
import { LastLocationProvider } from 'react-router-last-location';
import { connect } from 'react-redux';
import DefaultRouter from '../containers/Router';
import Loader from './Loader';
import Test from '../containers/Test';

const App = () => {

  return (
    <LastLocationProvider>
      <Suspense fallback={<Loader />}>
        <DefaultRouter />
        <Test />
        123
      </Suspense>
    </LastLocationProvider>
  );
}

export default connect(state => ({
}))(App);
