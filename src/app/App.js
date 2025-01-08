import React from 'react';
import { Route, Routes } from 'react-router';
import LockScreen from './LockScreen';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LockScreen />} />
      </Routes>
    </div>
  );
};

export default App;
