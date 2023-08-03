import React from "react";
import { useState } from "react";

function FootnoteTab(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const notes = props.notes;

  const handleClick = () => {
    setIsExpanded(current => !current);
  };

  const createList = notes.map((note)=>{
    return note;
  });

  return (
    <div className="scroll-up-container">
      <div 
        className="pull-tab-container"
        style={{bottom: isExpanded ? '0' : '-30vmin'}}
      >
        <div className="container">
          <p 
            className="footnotes"
            onClick={handleClick}
          >Footnotes</p>
        </div>
        <div className="footnote-content">
          <ol className="note-list">
            {createList}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FootnoteTab;
