import React, {useContext, useState} from "react"

const NavContext = React.createContext();
const NavUpdateContext = React.createContext();

const defaultNav = {
    map : {title : "map", img : null},
    side : null,
    utility : null,
    landing : null
}

export function useNav(){
    return useContext(NavContext);
}

export function useNavUpdate(){
    return useContext(NavUpdateContext);
}

export function NavProvider({ children }) {
    const [nav, setNav] = useState(defaultNav);

    function updateNav(){
        setNav(this);
    }
    
    return (
        <NavContext.Provider value={nav}>
            <NavUpdateContext.Provider value={updateNav}>
                {children}
            </NavUpdateContext.Provider>
        </NavContext.Provider>
    );

}