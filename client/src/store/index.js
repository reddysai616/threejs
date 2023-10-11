import { proxy
 } from "valtio";

 const State = proxy({
    intro:true,
    color:'#fffff',
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png'
 })

 export default State