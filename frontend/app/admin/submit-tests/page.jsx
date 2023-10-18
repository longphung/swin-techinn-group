import React from "react";
import SubmitTest from "components/SubmitTest/SubmitTest";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import classes from "./SubmitTestPage.module.css";
import Button from "components/Button/Button";
import Link from "next/link";

const SubmitTestPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.log(error);
    return <div>Error while fetching user data</div>;
  }
  if (!data?.session) {
    return (
      <div className={classes.notLoggedIn}>
        <p>Please login to submit test.</p>
        <Button as={Link} href="/login" variant="small">
          Login
        </Button>
      </div>
    );
  }
  return <SubmitTest />;
};

export default SubmitTestPage;
