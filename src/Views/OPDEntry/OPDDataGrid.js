import React from "react";
import { FaSearch } from "react-icons/fa";
import Textbox from "../../Components/Textbox/Textbox";

export default function OPDDataGrid({ ...props }) {
  return (
    <div className="customdatagrid-cont">
      <div className="customdatagrid-header">
        <div className="customdatagrid-title">Today's OPD <span className="text-secondary">(294)</span></div>
        <span className="d-flex align-items-center">
          <Textbox placeholder="Search..." />
          <FaSearch className="ms-1" />
        </span>
      </div>
    </div>
  );
}
