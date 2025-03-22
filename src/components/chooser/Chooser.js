import Choosable from '../choosable/Choosable';
import "./Chooser.css";

import { useNav } from '../../context/NavContext';
import { getChoosableMaps } from '../../services/MapService';
import { getChoosableSides } from '../../services/SideService';
import { getChoosableUtilities } from '../../services/UtilitiesService';
import { getChoosableLandingPlaces } from '../../services/LandingPlacesService';

export default function Chooser() {
    
    const nav = useNav();
    let type = '';
    let choosables = [];

    if(nav.map.isDefault){
        type = 'map';
        choosables = getChoosableMaps();
    }else if(nav.side.isDefault){
        type = 'side';
        choosables = getChoosableSides();
    }else if(nav.utility.isDefault){
        type = 'utility';
        choosables = getChoosableUtilities(); 
    }else if(nav.landing.isDefault) {
        type = 'landing';
        choosables = getChoosableLandingPlaces();
    }else{
        return (<></>);
    }

    const ChoosableList = choosables.map( choosable =>
        <Choosable
            type={type}
            choosable={choosable}
        />
    );
    
    return (
        <div className="chooser cardholder">
            <h1>Choose your {type} : </h1>
            {ChoosableList}
        </div>
    )
}