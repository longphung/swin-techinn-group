"use client";
import React, { useMemo, useState } from "react";
// AG Grid CSS
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.min.css";
import { AgGridReact } from "ag-grid-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = (props) => {
  return (
    <div>
      <button>Delete</button>
    </div>
  );
};

const UserTable = (props) => {
  const { data } = props;
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [columnDefs, setColumnDefs] = useState([
    {
      field: "name",
    },
    {
      field: "created_at",
      headerName: "Created At",
      editable: false,
    },
    {
      field: "email",
      editable: false,
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
      cellRenderer: DeleteButton,
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      editable: true,
      resizable: true,
    };
  }, []);

  const handleCellEditingStopped = async (event) => {
    console.log(event);
    const {
      colDef: { field },
      data,
    } = event;
    try {
      await supabase
        .from("profiles")
        .update({
          [field]: data[field],
        })
        .eq("id", data.id);
      toast("User profile updated", {
        type: "success",
      });
      router.refresh();
    } catch (e) {
      toast("Error updating user profile: " + e.message, {
        type: "error",
      });
    }
  };

  return (
    <div className="ag-theme-material" style={{ height: 500 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={data}
        defaultColDef={defaultColDef}
        onCellEditingStopped={handleCellEditingStopped}
      />
    </div>
  );
};

export default UserTable;
