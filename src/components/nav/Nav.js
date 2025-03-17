import "./Nav.css";
import NavItem from "../nav-item/NavItem";

export default function Nav({datanav}){

    return (
        <div id="nav" className="NAV cardholder">
            <NavItem
                itemState={datanav.map.state}
                itemType='map'
                setVisibilityMethod={datanav.map.setVisibilityMethod}
            />
            <NavItem
                itemState={datanav.side.state}
                itemType='side'
                setVisibilityMethod={datanav.side.setVisibilityMethod}
            />
            <NavItem
                itemState={datanav.utility.state}
                itemType='utility'
                setVisibilityMethod={datanav.utility.setVisibilityMethod}
            />
            <NavItem
                itemState={datanav.landing.state}
                itemType='landing'
                setVisibilityMethod={datanav.landing.setVisibilityMethod}
            />
        </div>
    )
}