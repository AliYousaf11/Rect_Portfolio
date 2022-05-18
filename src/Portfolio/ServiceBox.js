import React from "react";
import "./ServiceBox.css";

function ServiceBox({ title, text }) {
  return (
    <div className="serviceBox">
      <h3>.</h3>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default ServiceBox;
