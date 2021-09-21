import React from "react";

export const BotonClear = props => (
  <div id="clear" className="clear-btn" onClick={props.handleClear}>
    {props.children}
  </div>
);