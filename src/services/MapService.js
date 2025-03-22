import logo_inferno from "../ressources/img/logo_inferno.png";
import logo_dust2 from "../ressources/img/logo_dust2.png";
import logo_mirage from "../ressources/img/logo_mirage.png";

export const getChoosableMaps = () => {
    return [
        {title : "inferno",img : logo_inferno ,alt : "inferno"},
        {title : "mirage",img : logo_mirage, alt : "mirage"},
        {title : "dust2",img : logo_dust2, alt : "dust2"}
    ]
}