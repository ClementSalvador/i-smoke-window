import "./Choosable.css"

export default function Choosable({props, toCall}){
    
    const onClickFunction = () => {
        toCall(Object.create(props));
    }

    return (
        <div className="choosable card" onClick={onClickFunction}>
            <img src={props.img} alt={props.alt}/>
            <p>{props.title}</p>
        </div>
    )
}