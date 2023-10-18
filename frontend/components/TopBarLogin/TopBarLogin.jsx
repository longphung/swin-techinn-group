"use client";
import React, { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "react-toastify";
import Link from "next/link";

const TopBarLogin = () => {
  const supabase = createClientComponentClient();
  const [session, setSession] = useState({});
  useEffect(() => {
    const getSession = async () => {
      const session = await supabase.auth.getSession();
      console.log(session);
      return session;
    };
    getSession()
      .then((session) => {
        setSession(session);
      })
      .catch((e) => {
        toast(e.message, { type: "error" });
      });
  }, [supabase.auth]);
  return session.data?.session ? (
    <li>
      <Link href="/admin">Dashboard</Link>
    </li>
  ) : (
    <li>
      <Link href="/login">Login</Link>
    </li>
  );
};

export default TopBarLogin;
