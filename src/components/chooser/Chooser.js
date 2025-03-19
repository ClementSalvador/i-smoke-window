import Choosable from '../choosable/Choosable';
import "./Chooser.css";

export default function Chooser({ title, choosables}) {
    
    const ChoosableList = choosables.map( choosable =>
        <Choosable
            props={choosable}
        />
    );
    
    return (
        <div className="chooser cardholder">
            <h1>Choose your {title} : </h1>
            {ChoosableList}
        </div>
    )
}