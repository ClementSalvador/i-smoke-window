import "./NavItem.css";

import { useNav,useNavUpdate } from '../../context/NavContext'

export default function NavItem({type, item}) {
    
    const nav = useNav();
    const navUpdate = useNavUpdate();

    const empty = () => {
        const newNav = Object.create(nav);
        const emptyElement = {title : type, img : null, isDefault : true};
        Reflect.set(newNav, type, emptyElement);
        navUpdate.apply(newNav);
    }
    
    if(item.img){
        return (
            <div className="card nav-item" onClick={empty}>
                <div className="nav-item-text bold">{item.title}</div>
                <img src={item.img} alt=""/>
            </div>
        )
    }else{
        return (
            <div className="card nav-item">
                <div className="nav-item-text">{item.title}</div>
            </div>
        )
    }
}