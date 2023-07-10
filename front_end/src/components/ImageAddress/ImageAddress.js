import React from "react";
import './ImageAddress.css'

function ImageAddress({ OnInputchange, OnSubmit }){
    return(
        <div>
            <div>
                <p className="f3 fw5">This is magic brain will detect faces in your pictures. Give it a try</p>
            </div>
            <div className="center b-white"> 
                <div className="address w-40 shadow-5 pa4 center">
                    <input type='text' placeholder='Image Link Address' className="shadow-5 w-70 f4" onChange={OnInputchange}></input>
                    <button className="bg-light-blue grow shadow-3 w-30 f4" onClick={OnSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageAddress