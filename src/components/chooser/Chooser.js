import Choosable from '../choosable/Choosable';
import "./Chooser.css";

export default function Chooser({ type, choosables}) {
    
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