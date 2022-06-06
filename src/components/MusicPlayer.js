// import React, { useState, useEffect } from "react";
// import Song from "../sounds/sigma-song.mp3";
//
// function useAudio () {
//     const [audio] = useState(new Audio(Song));
//     const [playing, setPlaying] = useState(false);
//
//     const toggle = () => setPlaying(!playing);
//
//     useEffect(() => {
//             playing ? audio.play() : audio.pause();
//         },
//         [playing]
//     );
//
//     useEffect(() => {
//         audio.addEventListener('ended', () => setPlaying(true));
//         return () => {
//             audio.removeEventListener('ended', () => setPlaying(true));
//         };
//     }, []);
//
//     return [playing, toggle];
// };
//
// const MusicPlayer = () => {
//     const [playing, toggle] = useAudio(Song);
//     const terraGradient = "text-transparent bg-clip-text bg-gradient-to-tr from-terra-blue via-terra-blue to-terra-yellow";
//     const onHover = "hover:drop-shadow-sm";
//
//     return (
//         <div className="">
//             <button onClick={toggle}>{playing ? <i className={`fa-solid fa-music ${terraGradient} ${onHover}`} /> : <i className={`fa-solid fa-music-slash ${terraGradient} ${onHover}`} />}</button>
//         </div>
//
//     );
// };
//
// export default MusicPlayer;
//
// //
// //