import { createClient } from "@supabase/supabase-js";

export async function DELETE(request) {
  const supabase = await createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.DB_SERVICE_ROLE,
  );
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const res = await supabase.auth.admin.deleteUser(id);
  if (res.error) {
    return Response.json(
      { error: res.error.message },
      {
        status: res.error.code,
      },
    );
  }
  return Response.json({ id });
}
