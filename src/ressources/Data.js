import logo_side_t from "./img/logo_terrorist.png";
import logo_side_ct from "./img/logo_counter-terrorist.png";

import logo_flash from './img/logo_flash.webp';
import logo_smoke from './img/logo_smoke_csgo.webp';

import logo_site_a from './img/logo_site_a.png';
import logo_site_b from './img/logo_site_b.png';

export const sides = [
    {title : "counter-terrorist" , img : logo_side_ct, alt:"ct side"},
    {title : "terrorist" , img : logo_side_t, alt:"t side"},
]
export const sideNull = {title : "side",img : null, alt:"carte"};

export const utilities = [
    {title : 'smoke', img : logo_smoke, alt : 'smoke logo'},
    {title : 'flash', img : logo_flash, alt : 'flash logo'},
]
export const utilityNull = {title : "utility",img : null, alt:"utility"};

export const landingPlaces = [
  {title : 'site a', img : logo_site_a, alt : 'A'},
  {title : 'site b', img : logo_site_b, alt : 'B'}
]
export const landingPlaceNull = {title : "landing",img : null, alt:"landing"};