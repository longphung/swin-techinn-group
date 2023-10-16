import React from "react";
import classes from "./admin.module.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Button from "components/Button/Button";
import AdminTopBar from "components/AdminTopBar/AdminTopBar";

const AdminLayout = async (props) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return (
      <div className={classes.notLoggedIn}>
        <h1>Not logged in</h1>
        <Button as={Link} href="/login">
          Login
        </Button>
      </div>
    );
  }

  return (
    <div className={classes.adminContainer}>
      <aside className={classes.sidebar}>
        <h1>User Management</h1>

        <nav>
          <a className="active" href="#">
            <i className="bx bxs-balloon"></i> Report Generation
          </a>
          <a href="#">
            {" "}
            <i className="bx bxs-balloon"></i>Test Results
          </a>
          <a href="#">
            <i className="bx bxs-balloon"></i>Manage User Accounts
          </a>
          <a href="#">
            <i className="bx bxs-balloon"></i>Notifications
          </a>
        </nav>

        <nav>
          <a href="#">
            <i className="bx bxs-balloon"></i>Dashboard
          </a>
          <a href="#">
            <i className="bx bxs-balloon"></i>User Management
          </a>
          <a href="#">
            <i className="bx bxs-balloon"></i>Content Management
          </a>
          <a href="#" className={classes.active}>
            <i className="bx bxs-balloon"></i>Reporting
          </a>
        </nav>

        <div>
          <form
            id="logout"
            action="/logout"
            method="post"
            className={classes.hiddenForm}
          />
          <button type="submit" form="logout" className={classes.plainButton}>
            <i className="bx bxs-balloon"></i>Logout
          </button>
        </div>
      </aside>
      <main className={classes.main}>
        <AdminTopBar />
        <div className={classes.mainContentWrapper}>{props.children}</div>
      </main>
    </div>
  );
};

export default AdminLayout;
