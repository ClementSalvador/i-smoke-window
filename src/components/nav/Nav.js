import "./Nav.css";
import NavItem from "../nav-item/NavItem";

import { useNav } from '../../context/NavContext'

export default function Nav({ datanav }) {

    const nav = useNav();

    return (
        <div id="nav" className="NAV cardholder">
            <NavItem
                item={nav.map}
            />
            <NavItem
                item={nav.side}
            />
            <NavItem
                item={nav.utility}
            />
            <NavItem
                item={nav.landing}
            />
        </div>
    )
}