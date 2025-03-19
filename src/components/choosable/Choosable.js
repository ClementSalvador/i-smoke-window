import "./Choosable.css"
import {useNavUpdate} from '../../context/NavContext'

export default function Choosable({props}){
    
    const navUpdate = useNavUpdate();

    const defaultNav2 = {
        map : {title : "bite", img : null},
        side : null,
        utility : null,
        landing : null
    }

    const onClickFunction = () => {
       navUpdate.apply(defaultNav2);
    }

    return (
        <div className="choosable card" onClick={onClickFunction}>
            <img src={props.img} alt={props.alt}/>
            <p>{props.title}</p>
        </div>
    )
}