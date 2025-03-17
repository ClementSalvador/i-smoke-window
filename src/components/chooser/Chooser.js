import Choosable from '../choosable/Choosable';
import "./Chooser.css";

export default function Chooser({ title, choosables, toCall, isVisible }) {
    if(!isVisible){
        return null;
    }
    
    const ChoosableList = choosables.map( choosable =>
        <Choosable
            props={choosable}
            toCall={toCall}>
        </Choosable>
    );
    
    return (
        <div className="chooser cardholder">
            <h1>Choose your {title} : </h1>
            {ChoosableList}
        </div>
    )
}