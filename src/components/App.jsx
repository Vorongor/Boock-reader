import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/home';
import MobileAuth from 'pages/mobile';

function App() {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="mobile" element={<MobileAuth />} />
      </Routes>
    </Suspense>
  );
}
export default App;
