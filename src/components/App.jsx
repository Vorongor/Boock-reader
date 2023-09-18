import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/home';
import MobileAuth from 'pages/mobile';
import Library from 'pages/library';
import { useSelector } from 'react-redux';
import { RestrictedRoute } from './RestrictedRoute';

function App() {
  const isLogined = useSelector(state => state.auth.isLoggedIn);

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
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
        {/* <Route path="mobile" element={<MobileAuth />} /> */}
        <Route path="library" element={<Library />} />
        <Route path="training" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
export default App;
