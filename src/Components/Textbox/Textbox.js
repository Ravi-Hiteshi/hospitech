import React from "react";
import "./Textbox.scss";

export default function Textbox({
  label = "label",
  value = "",
  placeholder = "",
  onChange = () => {},
  type = "text",
  ...rest
}) {
  return (
    <div className="textbox-component">
      {label != undefined && label != "" && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}
