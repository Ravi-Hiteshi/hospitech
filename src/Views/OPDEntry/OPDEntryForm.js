import React from "react";
import { Col, Row } from "reactstrap";
import Textbox from "../../Components/Textbox/Textbox";
import { FaAngleDoubleRight, FaHistory, FaPlus, FaRecycle, FaRegEdit, FaRegSave, FaRegTimesCircle, FaSave } from "react-icons/fa";
import "./OPDEntry.scss";
import Tooltip from "@mui/material/Tooltip";
import ReactSelect from "react-select";
import Select from "../../Components/Select/Select";
import Divider from "../../Components/Divider/Divider";

export default function OPDEntryForm() {
  const opdTypeOptions = [
    { value: "New", label: "New" },
    { value: "Under-Seven", label: "Under-Seven" },
    { value: "Refered", label: "Refered" },
  ];
  const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const ageFactorOptions = [
    { value: "Years", label: "Years" },
    { value: "Months", label: "Months" },
    { value: "Days", label: "Days" },
  ];
  const categoryOptions = [
    { value: "GEN", label: "GEN" },
    { value: "OBC", label: "OBC" },
    { value: "SC", label: "SC" },
    { value: "ST", label: "ST" },
  ];
  return (
    <>
      <div className="opdentry-form-header">
        <span className="d-flex align-items-center">
          <label style={{ marginTop: "2px" }}>
            <strong>OPD ID &nbsp;</strong> #2525412 &nbsp;
          </label>
          <Tooltip title={"Open old OPD record by opd-id"} arrow>
            <i>
              <FaRegEdit color="teal" cursor="pointer" />
            </i>
          </Tooltip>
        </span>
        <span className="d-flex">
        <button className="btn btn-outline-success btn-sx me-1"><FaAngleDoubleRight/> Refered</button>
          <button className="btn btn-outline-success btn-sx"><FaHistory /> Repeated Patient</button>
          <span className="text-secondary ps-2 pe-2 pt-1">|</span>
          <button className="btn btn-outline-secondary btn-sx me-1">
            <FaRegTimesCircle /> Cancel
          </button>
          <button className="btn btn-success btn-sx"><FaPlus /> Save</button>
        </span>
      </div>
      <div className="opdentry-form-cont">
        {/* ----------------------------------------------------------------------------- */}
        <Divider title="Personal Information" />
        <Row className="gx-1 gy-1">
          <Col sm={12} md={4}>
            <Textbox label="Patient Name*" placeholder="patient name" />
          </Col>
          <Col md={4}>
            <Textbox
              label="Father/Husband Name*"
              placeholder="father or husband name"
            />
          </Col>
          <Col md={4}>
            <Select label="Gender *" options={genderOptions} />
          </Col>
          <Col md={4}>
            <Select label="Age Factor *" options={ageFactorOptions} />
          </Col>
          <Col md={4}>
            <Textbox label="Age" placeholder="age (only numeric)" />
          </Col>
          <Col md={4}>
            <Select label="Category" options={categoryOptions} />
          </Col>
          <Col md={4}>
            <Textbox label="Address" placeholder="residential address" />
          </Col>
          <Col md={4}>
            <Textbox
              label="Contact No."
              placeholder="patient or gardian contact no."
            />
          </Col>
          <Col md={4}>
            <Textbox label="Aadhar No." placeholder="Aadhar card no." />
          </Col>
        </Row>
        {/* ----------------------------------------------------------------------------- */}
        <Divider title="Hospital Information" />
        <Row className="gx-1 gy-1">
          <Col md={4}>
            <Select label="Doctor *" options={[]} />
          </Col>
          <Col md={4}>
            <Select label="Department *" options={[]} />
          </Col>
          <Col md={4}>
            <Select label="Dignosis *" options={[]} />
          </Col>
        </Row>
        {/* ----------------------------------------------------------------------------- */}
        <Divider title="Payment Information" />
        <Row className="gx-1 gy-1">
          <Col md={4}>
            <Select label="Payment Category *" options={[]} />
          </Col>
          <Col md={4}>
            <Textbox
              label="Payment Reference"
              placeholder="Payment category reference"
            />
          </Col>
          <Col md={4}>
            <Textbox label="Ammount *" placeholder="Amount paid for OPD" />
          </Col>
        </Row>
      </div>
    </>
  );
}
