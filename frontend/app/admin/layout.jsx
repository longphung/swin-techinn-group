import React from "react";
import classes from "./admin.module.css";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import Button from "components/Button/Button";
import AdminTopBar from "components/AdminTopBar/AdminTopBar";
import AdminNav from "components/AdminNav/AdminNav";

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
  const profileRes = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id);

  if (profileRes.error) {
    return (
      <div className={classes.notLoggedIn}>
        <h1>Error while fetching user profile</h1>
        <Button as={Link} href="/login">
          Login
        </Button>
      </div>
    );
  }
  const profile = profileRes.data[0];
  let adminNav = [];
  if (profile.is_admin) {
    const res = await supabase.from("admin_page_features").select("*");
    adminNav = res.data;
  } else {
    const res = await supabase
      .from("admin_page_features")
      .select("*")
      .eq("is_admin", false);
    adminNav = res.data;
  }

  return (
    <div className={classes.adminContainer}>
      <aside className={classes.sidebar}>
        <AdminNav data={adminNav} />
        <div>
          <form
            id="logout"
            action="/logout"
            method="post"
            className={classes.hiddenForm}
          />
          <div>
            <Link href="/" className={classes.plainButton}>
              Home
            </Link>
          </div>
          <br />
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
