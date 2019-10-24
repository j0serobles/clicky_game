import React from "react";
import "./style.css";

function IconCard(props) {
  return (
    <div className="col-sm-3">
      <div className="card m-1 shadow">
        <div className="img-container">
          <img className="img-fluid mx-auto d-block" alt={props.name} src={props.image} onClick={() => props.processClick(props.id)} />
        </div>
      </div>
    </div>
    
    
  );
}

export default IconCard;
