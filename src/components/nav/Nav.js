import "./Nav.css";
import NavItem from "../nav-item/NavItem";

import { useNav } from '../../context/NavContext'

export default function Nav() {

    const nav = useNav();

    const NavItems = Object.keys(nav).map(property =>    
        <NavItem
            type={property}
            item={nav[property]}
        />
    );

    return (
        <div id="nav" className="NAV cardholder">
            {NavItems}
        </div>
    )
}