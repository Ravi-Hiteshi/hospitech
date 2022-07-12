import React from "react";
import OPDDataGrid from "./OPDDataGrid";
import "./OPDEntry.scss";
import OPDEntryForm from "./OPDEntryForm";

export default function OPDEntry() {
  return (
    <div className="opdentry-container">
      <div className="opdentry-form">
        <OPDEntryForm />
      </div>
      <div className="opdentry-datagrid">
        <OPDDataGrid />
      </div>
    </div>
  );
}
