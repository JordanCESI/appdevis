import React from 'react';
import './App.css';
import Home from './pages/home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet/>
    </>
  );
}

export default App;
