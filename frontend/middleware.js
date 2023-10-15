import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const { data, error } = await supabase.auth.getSession();
  if (
    req.cookies.get("supabase/user-token")?.value !== data.session?.access_token
  ) {
    req.cookies.delete("supabase/user-token");
  }
  if (data.session?.access_token) {
    res.cookies.set("supabase/user-token", data.session.access_token);
  }
  return res;
}
