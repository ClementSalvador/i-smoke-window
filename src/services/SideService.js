import logo_side_t from "../ressources/img/logo_terrorist.png";
import logo_side_ct from "../ressources/img/logo_counter-terrorist.png";

export const getChoosableSides = () => {
    return [
        {title : "counter-terrorist" , img : logo_side_ct, alt:"ct side"},
        {title : "terrorist" , img : logo_side_t, alt:"t side"},
    ]
}