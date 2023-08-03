import React, {useState, useEffect} from "react";
import PopUp from "./PopUp";

function TopContent(props) {
  const [isShown, setIsShown] = useState(false);
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY + window.scrollY});
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className="topcontent-box">
        <h1 className="title"> {props.text} </h1>
        <img src= {props.source} alt= {props.alt} className="topcontent-image" 
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        />
        {isShown && (
        <PopUp x={mousePos.x  + 20} y={mousePos.y} text={props.popupText}/>
      )}
      </div>
  )
}

export default TopContent;