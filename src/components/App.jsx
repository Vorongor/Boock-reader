import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/home';
import MobileAuth from 'pages/mobile';
import Library from 'pages/library';
import { useSelector } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute';
import NewBoock from './NewBook/NewBook';
import Header from 'layuot/Header';
import Statistic from 'pages/statistic';
import NewTraining from './NewTraining/NewTraining';

function App() {
  const isLogined = useSelector(state => state.auth.isLoggedIn);

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="/mobile"
            element={
              <RestrictedRoute
                redirectTo="/training"
                condition={() => !isLogined}
                component={<MobileAuth />}
              />
            }
          />
          <Route path="library" element={<Library />} />
          <Route path="training" element={<Home />} />
          <Route path="new-book" element={<NewBoock />} />
          <Route path="statistic" element={<Statistic />} />
          <Route path="new-training" element={<NewTraining />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
export default App;
