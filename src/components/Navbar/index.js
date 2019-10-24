import React from "react";
import StatusMessage from "../StatusMessage";
import ScoreBoard    from "../ScoreBoard";
import "./style.css";

function Navbar(props) { 
return( 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <a className="navbar-brand" href="/"><i className="fas fa-mouse"></i>  <strong>Clicky-Game</strong></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="row container-fluid mx-auto">
        <div className="col text-center">
          <StatusMessage statusMsg={ props.statusMsg }/>
        </div>
        <div className="col text-right"> 
          <ScoreBoard currentScore={props.currentScore} highScore={props.highScore}/>
        </div>
        </div>
    </div>

</nav>
); 
}

export default Navbar;