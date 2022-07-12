import React from "react";
import "./OPDEntry.scss";
import OPDEntryForm from "./OPDEntryForm";

export default function OPDEntry() {
  return (
    <div className="opdentry-container">
      <div className="opdentry-form">
        <OPDEntryForm />
      </div>
      <div className="opdentry-datagrid">Today's OPD List</div>
    </div>
  );
}
