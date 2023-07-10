import React from "react";

function FaceRecognition({ imageURL }){
    return(
    <div className="center">
        <img alt="" src={ imageURL } width="600px" height="auto" className="grow mt3 mb3"></img>
    </div>
    );
}

export default FaceRecognition