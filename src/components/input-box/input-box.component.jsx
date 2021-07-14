import React from "react";
import "./input-box.style.css";
export const InputBox = (props) => {
  return (
    <div>
      <input
        className="input-text"
        type="search"
        placeholder="Search Monsters"
        onChange={props.onSearchChange}
      ></input>
    </div>
  );
};
