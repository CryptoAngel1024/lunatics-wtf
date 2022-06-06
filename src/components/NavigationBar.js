// import React, {useState, useEffect} from "react";
// import {StaticImage} from "gatsby-plugin-image";
// import Song from "../sounds/sigma-song.mp3";
// import MusicPlayer from "./MusicPlayer";
// import {Link} from "gatsby";
//
//
// export default function NavigationBar(props) {
//     const terraGradient = "text-transparent bg-clip-text bg-gradient-to-tr from-terra-blue via-terra-blue to-terra-yellow";
//     const onHover = "hover:drop-shadow-sm";
//
//     var home = props.home;
//
//     return (
//         <>
//             <nav className="w-full flex items-center justify-center py-12">
//                 <div className="text-5xl flex space-x-6">
//                     <a href="#"><i className={`fa-brands fa-twitter ${terraGradient} ${onHover}`} /></a>
//                     <a href="#"><StaticImage src="../images/opensea.png" alt="Opensea" className={`w-12 ${onHover}`}  /></a>
//                     {/*<button onClick={start}>Play</button>*/}
//                     <MusicPlayer />
//                     {/*<i className={`fa-solid fa-boombox ${terraGradient} ${onHover}`} />*/}
//                 </div>
//             </nav>
//         </>
//     )
// }