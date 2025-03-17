
import './App.css';
import Chooser from './components/chooser/Chooser';
import Nav from './components/nav/Nav'
import {  useEffect, useState } from 'react';

import { maps, mapNull, sides, sideNull, utilities, utilityNull,landingPlaces, landingPlaceNull } from './ressources/Data';

function App() {
  const [selectedMap, setSelectedMap] = useState(mapNull);
  const [selectedSide, setSelectedSide] = useState(sideNull);
  const [selectedUtility, setSelectedUtility] = useState(utilityNull);
  const [selectedLandingPlace, setSelectedLadingPlace] = useState(landingPlaceNull);
  const [visibility, setVisibility] = useState('map');

  /** Gestion de l'affichage du bon chooser en fonction des éléments sélectionnés ou non */
  useEffect(() => {
    if(selectedMap === mapNull){
      setVisibility('map');
      return;
    }
    if(selectedSide === sideNull){
      setVisibility('side');
      return;
    }
    if(selectedUtility === utilityNull){
      setVisibility('utility');
      return;
    }
    if(selectedLandingPlace === landingPlaceNull){
      setVisibility('landing');
      return;
    }
    setVisibility('');
  },[selectedMap, selectedSide, selectedUtility, selectedLandingPlace]);

  const resetNav = () => {
    setSelectedMap(mapNull);
    setSelectedSide(sideNull);
    setSelectedUtility(utilityNull);
    setSelectedLadingPlace(landingPlaceNull);
  }

  const dataNav = {
    map : {
      state : selectedMap,
      setVisibilityMethod : setVisibility
    },
    side : {
      state : selectedSide,
      setVisibilityMethod : setVisibility
    },
    utility : {
      state : selectedUtility,
      setVisibilityMethod : setVisibility
    },
    landing : {
      state : selectedLandingPlace,
      setVisibilityMethod : setVisibility
    }
  }

  return (
    <div className="App">
      <div className="title">I SMOKE WINDOW</div>

      <Nav datanav={dataNav}/>
      
      <Chooser
        title="map"
        choosables={maps}
        toCall={setSelectedMap}
        isVisible={visibility === 'map'}
      />
      <Chooser
        title="side"
        choosables={sides}
        toCall={setSelectedSide}
        isVisible={visibility === 'side'}
      />
      <Chooser
        title="utility"
        choosables={utilities}
        toCall={setSelectedUtility}
        isVisible={visibility === 'utility'}
      />
      <Chooser
        title="landing"
        choosables={landingPlaces}
        toCall={setSelectedLadingPlace}
        isVisible={visibility === 'landing'}
      />
      <button onClick={resetNav}>reset</button>
    </div>
  );
}

export default App;
