import React from "react";

function ContentBox(props) {
  if (props.isLast) {
    return (
      <div className="content-box">
        <div className="text-box">
          <p className="text-title">{props.contentTitle}</p>
          <p className="content">{props.content}</p>
        </div>
        <div className="image-box">
          <img
            src={props.imageSrc}
            alt="temp_image"
            className="content-image"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="content-box bottom-line">
        <div className="text-box">
          <p className="text-title">{props.contentTitle}</p>
          <p className="content">{props.content}</p>
        </div>
        <div className="image-box">
          <img
            src={props.imageSrc}
            alt="temp_image"
            className="content-image"
          />
        </div>
      </div>
    );
  }
}

export default ContentBox;
