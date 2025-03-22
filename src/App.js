
import './App.css';
import Chooser from './components/chooser/Chooser';
import Nav from './components/nav/Nav'
import {  useEffect, useState } from 'react';
import { useNav } from './context/NavContext'

import { maps, mapNull, sides, sideNull, utilities, utilityNull,landingPlaces, landingPlaceNull } from './ressources/Data';
import { NavProvider } from './context/NavContext';

function App() {

  return (
    <>
    <div className="title">I SMOKE WINDOW</div>
    <NavProvider>
      <Nav></Nav>
      <Chooser />
    </NavProvider>
    </>
  );
}

export default App;
