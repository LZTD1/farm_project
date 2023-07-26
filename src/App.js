import React from 'react';

import './scss/app.scss';
import Header from './components/Blocks/Header';
import NotFound from './screens/NotFound';
import { Routes, Route } from 'react-router-dom';
import Cart from './screens/Cart';
import Home from './screens/Home';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
