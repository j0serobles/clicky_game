import React from "react";

function ScoreBoard(props) { 
return( 
  <span className="navbar-text">
      Score: {props.currentScore} | High Score: {props.highScore}
  </span>
);
}
export default ScoreBoard;