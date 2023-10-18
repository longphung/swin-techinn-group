"use client";
import React, { useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { usePathname } from "next/navigation";

const Analytics = () => {
  const supabase = createClientComponentClient();
  const pathname = usePathname();
  useEffect(() => {
    const submit = async () => {
      const sessionRes = await supabase.auth.getSession();
      const { data, error } = await supabase.from("logging").insert({
        description: "User visited " + pathname,
        user_id: sessionRes.data.session?.user.id || null,
      });
      if (error) {
        console.log(error);
        return;
      }
      console.log(data);
    };
    submit();
  }, [pathname, supabase]);
  return <></>;
};

export default Analytics;
