import React from "react";
import Tilt from 'react-parallax-tilt'
import './Logo.css'
import brain from './brain.png'

function Logo(){
    return(
        <div className="ma4 mt0">
            <Tilt className="Tilt shadow-3 pointer" options={{ max : 60 }} style={{ height: 125, width: 125 }} >
            <div className="Tilt"><img className="center w-90" style={{padding: 9}} alt="logo" src={brain} /></div>
            </Tilt>
            {/* <mark className="Tilt shadow-3 pointer" options={{ max : 60 }} style={{ height: 125, width: 125 }} >
            <div className="Tilt-inner"><img className="center w-90" style={{padding: 9}} alt="logo" src={brain} /></div>
            </mark> */}
        </div>
    );
}

export default Logo