import React from "react";
import { format } from "date-fns";
import { cookies, headers } from "next/headers";
import { createClient } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

import UserTable from "components/UserTable/UserTable";

const UsersPage = async () => {
  const cookiesStore = cookies();
  const supabase = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.DB_SERVICE_ROLE,
  );
  const userToken = cookiesStore.get("supabase/user-token");
  if (!userToken) {
    redirect("/login");
  }
  const {
    data: { user },
  } = await supabase.auth.getUser(userToken.value);
  const {
    data: [profile],
  } = await supabase.from("profiles").select("is_admin").eq("id", user.id);
  if (!profile) {
    return <>Please re-register, user missing profile data</>;
  }
  if (!profile.is_admin) {
    return <>Work in progress for non admin</>;
  }
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    toast("Error fetching users data: " + error.message, {
      type: "error",
    });
  }
  console.log(data);
  const dataToShow =
    data.map((x) => ({
      ...x,
      name: x.first_name + " " + x.last_name,
      created_at: format(new Date(x.created_at), "do LLL yyyy"),
    })) || [];
  return (
    <div>
      <h1>Users</h1>
      <UserTable data={dataToShow} />
    </div>
  );
};

export default UsersPage;
