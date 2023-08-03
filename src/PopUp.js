import React from "react";

function PopUp(props) {
  return (
    <div className="popup-box"
        style={{top:props.y - 10, left:props.x + 10}}
        >
          <p className="popup-text">{props.text}</p>
    </div>
  )
}

export default PopUp;