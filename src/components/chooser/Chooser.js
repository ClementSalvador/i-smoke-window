import Choosable from '../choosable/Choosable';
import "./Chooser.css";

import { maps, mapNull, sides, sideNull, utilities, utilityNull,landingPlaces, landingPlaceNull } from '../../ressources/Data';
import { useNav } from '../../context/NavContext'

export default function Chooser() {
    
    const nav = useNav();
    let type = '';
    let choosables = [];

    if(nav.map.isDefault){
        type = 'map';
        choosables = maps;
    }else if(nav.side.isDefault){
        type = 'side';
        choosables = sides;
    }else if(nav.utility.isDefault){
        type = 'utility';
        choosables = utilities; 
    }else if(nav.landing.isDefault) {
        type = 'landing';
        choosables = landingPlaces;
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