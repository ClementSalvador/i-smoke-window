import "./Choosable.css"
import {useNavUpdate, useNav} from '../../context/NavContext'

export default function Choosable({type, choosable}){
    
    const navUpdate = useNavUpdate();
    const nav = useNav();

    const onClickFunction = () => {
       const newNav = {...nav};
       Reflect.set(newNav, type, choosable);
       navUpdate.apply(newNav);
    }

    return (
        <div className="choosable card" onClick={onClickFunction}>
            <img src={choosable.img} alt={choosable.alt}/>
            <p>{choosable.title}</p>
        </div>
    )
}