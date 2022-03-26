import React from 'react'; // imported react library to use its functionality.
import logo from './logo.svg';
import './App.css';
import TimeCompo from './ReactCompo_Assignment4';

// declare function component Note : Name of function component must start with Capital Letter.
function HeaderComponent(){
    return(
        <div>
            <h3 style={{color:'orange'}}>                 
                               
               <img src={logo} alt="logo" width="70px" height="50px" />
            </h3>
            <br /><br />
            <p style={{ color : 'blue'}}> Welcome From Header Component </p>             
            <TimeCompo></TimeCompo>
        </div>
    );
}

export default HeaderComponent;// To make availability of component outside the file also. 