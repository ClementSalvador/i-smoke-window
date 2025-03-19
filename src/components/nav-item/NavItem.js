import "./NavItem.css";

export default function NavItem({item}) {
    if(item.img){
        return (
            <div className="card nav-item">
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