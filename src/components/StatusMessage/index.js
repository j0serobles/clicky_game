import React from "react";
import "./style.css";


function StatusMessage(props) { 
return( 
        <span className="navbar-text">
          {props.statusMsg}
        </span>
); 
}

export default StatusMessage;