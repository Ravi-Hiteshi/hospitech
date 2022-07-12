import React from "react";
import "./Divider.scss";

export default function Divider(props) {
  return (
    <div className="divider-com">
      <div className="divider-inner">{props.title}</div>
    </div>
  );
}
