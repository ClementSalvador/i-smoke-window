import "./NavItem.css";

export default function NavItem({item/* itemState, itemType,setVisibilityMethod */}) {

    return (
        <div className="card nav-item">
            <div className="nav-item-text">{item.title}</div>
        </div>
    )


   /* const onClick = () => {
        setVisibilityMethod(itemType);
    }*
    if (itemState.img) {
        return (
            <div className="card nav-item" onClick={onClick}>
                <div className="nav-item-text bold">{itemState.title}</div>
                <img src={itemState.img} alt={itemState.alt} />
            </div>
        )
    }

    return (
        <div className="card nav-item" onClick={onClick}>
            <div className="nav-item-text">{itemState.title}</div>
        </div>
    )*/


}