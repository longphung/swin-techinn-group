"use client";
import React from "react";
// AG Grid CSS
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.min.css";
import { AgGridReact } from "ag-grid-react";

const EditDeleteButton = (props) => {
  console.log(props);
  return (
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
};

const columnDefs = [
  {
    field: "name",
  },
  {
    field: "created_at",
    headerName: "Created At",
  },
  {
    field: "email",
    headerName: "E-mail",
  },
  {
    field: "sexual",
  },
  {
    field: "suburb",
  },
  {
    field: "edit",
    cellRenderer: EditDeleteButton,
  }
];

const UserTable = (props) => {
  const { data } = props;
  return (
    <div className="ag-theme-material" style={{ height: 400, width: 600 }}>
      <AgGridReact columnDefs={columnDefs} rowData={data} />
    </div>
  );
};

export default UserTable;
