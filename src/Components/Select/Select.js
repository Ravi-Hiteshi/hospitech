import React from "react";
import ReactSelect from "react-select";

export default function Select({ label = "", ...rest }) {
  const selectStyle = {
    container: (provided, state) => ({
      ...provided,
      width: "100%",
      minWidth: "100px",
      height: "30px",
      borderRadius: "3px",
      border: "1px solid #ddd",
      backgroundColor: "#FFF",
      margin: "0px",
      border: state.isFocused
        ? "1px solid rgb(108, 185, 182)"
        : "1px solid #ddd",
      boxShadow: state.isFocused
        ? "0px 0px 5px rgba(71, 195, 204, 0.5)"
        : "none",

      "&:hover": {
        border: "1px solid rgb(108, 185, 182)",
        boxShadow: "0px 0px 5px rgba(71, 195, 204, 0.5)",
        cursor : "pointer",
      },
    }),
    control: () => ({
      display: "flex",
      height: "30px",
      padding: "0px 5px 0px 10px",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "none",
    }),
    valueContainer: (provided) => ({
      input: (provided) => ({
        ...provided,
        textAlign: "left",
        color: "white",
      }),
      ...provided,
      padding: "0px",
      fontSize: "13px",
    }),
    input: (provided) => ({
      ...provided,
      textAlign: "left",
      boxShadow: "none",
      border: "none",
      outline: "none",
      fontSize: "13px",

      "&:focus": {
        ...provided,
        boxShadow: "none !important",
        border: "none !important",
        outline: "none !important",
        color: "red !important",
      },
    }),
    menu: (provided) => ({
      ...provided,
      padding: "2px 0px",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "teal" : "#000",
      backgroundColor: "#fff",
      display: "flex",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      fontSize: "13px",
      padding: "2px 10px",
      cursor : "pointer",
    }),
  };
  return (
    <span className="d-flex flex-column p-0">
      {label != undefined && label !== "" && <label>{label}</label>}
      <ReactSelect styles={selectStyle} {...rest} isSearchable={true} />
    </span>
  );
}
