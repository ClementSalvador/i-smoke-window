import logo_flash from '../ressources/img/logo_flash.webp';
import logo_smoke from '../ressources/img/logo_smoke_csgo.webp';

export const getChoosableUtilities = () => {
    return [
        {title : 'smoke', img : logo_smoke, alt : 'smoke logo'},
        {title : 'flash', img : logo_flash, alt : 'flash logo'},
    ]
}