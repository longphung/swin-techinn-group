"use client";
import React, { useEffect, useMemo, useState } from "react";
// AG Grid CSS
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.min.css";
import { AgGridReact } from "ag-grid-react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const DeleteButton = (props) => {
  const supabase = createClientComponentClient();
  const [session, setSession] = useState({});
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
        return;
      }
      setSession(data.session);
    };
    getSession();
  }, [supabase.auth]);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: `Deleting ${props.data.name}. Are you sure?`,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      showCancelButton: true,
    });
    if (!result.isConfirmed) {
      return;
    }
    const { error } = await supabase
      .from("profiles")
      .delete()
      .eq("id", props.data.id);
    await fetch(`/api/users?id=${props.data.id}`, {
      method: "DELETE",
    });
    if (error) {
      toast("Error deleting user: " + error.message, {
        type: "error",
      });
    }
    toast(`User ${props.data.name} deleted`, {
      type: "success",
    });
    router.refresh();
  };

  return (
    session.user?.id !== props.data.id && (
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    )
  );
};

const UserTable = (props) => {
  const { data } = props;
  const supabase = createClientComponentClient();
  const getRowId = useMemo(() => {
    return (params) => params.data.id;
  }, []);

  const [columnDefs] = useState([
    {
      field: "first_name",
    },
    {
      field: "last_name",
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
    const {
      colDef: { field },
      data,
    } = event;
    const { data: resData, error } = await supabase
      .from("profiles")
      .update({
        [field]: data[field],
      })
      .eq("id", data.id);
    console.log(resData, error);
    if (error) {
      toast("Error updating user profile: " + error.message, {
        type: "error",
      });
    }
    toast("User profile updated", {
      type: "success",
    });
  };
  console.log(data);

  return (
    <div className="ag-theme-material" style={{ height: 500 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={data}
        defaultColDef={defaultColDef}
        onCellEditingStopped={handleCellEditingStopped}
        getRowId={getRowId}
      />
    </div>
  );
};

export default UserTable;
