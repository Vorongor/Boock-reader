import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/home';

function App() {
  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
export default App;
