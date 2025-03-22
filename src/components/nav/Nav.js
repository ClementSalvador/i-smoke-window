import "./Nav.css";
import NavItem from "../nav-item/NavItem";

import { useNav } from '../../context/NavContext'

export default function Nav() {

    const nav = useNav();

    return (
        <div id="nav" className="NAV cardholder">
            <NavItem
                type='map'
                item={nav.map}
            />
            <NavItem
                type='side'
                item={nav.side}
            />
            <NavItem
                type='utility'
                item={nav.utility}
            />
            <NavItem
                type='landing'
                item={nav.landing}
            />
        </div>
    )
}