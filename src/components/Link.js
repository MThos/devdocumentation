import React from "react";

const Link = (props) => {
  return (
    <div className="link">
      <a href={`${props.link}`} target="_blank" rel="noreferrer">
        <div className="icon">
          <i className={`${props.image}`}></i>
        </div>
        <div className="name">
          {props.name}
        </div>
      </a>
    </div>
  )
}

export default Link;