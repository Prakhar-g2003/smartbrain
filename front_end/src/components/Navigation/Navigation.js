import React from "react";

function Navigation( {OnSignin, route} ){
    if(route === 'home'){
        return(
            <div>
                <nav>
                    <p className='underline f3 tr link dim pa3 pointer' onClick={()=>OnSignin('signin')}>Sign Out</p>
                </nav>
            </div>
        );
    }
    else if(route ===  'signin'){
        return(
            <div>
                <nav>
                    <p className='underline f3 tr link dim pa3 pointer' onClick={()=>OnSignin('register')}>Register</p>
                </nav>
            </div>
        );
    }
    else{
        return(
            <div>
                <nav>
                    <p className='underline f3 tr link dim pa3 pointer' onClick={()=>OnSignin('signin')}>Sign in</p>
                </nav>
            </div>
        );
    }
    
}

export default Navigation