import React from "react";
import ClinicsCloseToPostcode from "components/ClinicsCloseToPostcode/ClinicsCloseToPostcode";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import TestResultsAccordion from "../../../components/TestResultsAccordion/TestResultsAccordion";

const RecommendPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const recommendPageRes = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL + "/api/recommend-page",
  );
  const { data, error } = await recommendPageRes.json();
  if (error) {
    return <>Error fetching recommend page data: {error.message}</>;
  }
  const {
    attributes: { body },
  } = data;
  const sessionRes = await supabase.auth.getSession();
  if (sessionRes.error) {
    return <>Error fetching session: {sessionRes.error.message}</>;
  }
  const testResultsRes = await supabase
    .from("test_results")
    .select("*")
    .eq("user_id", sessionRes.data.session.user.id);

  return (
    <div>
      <h1>Test Recommendations</h1>
      <TestResultsAccordion data={testResultsRes.data} />
      <div
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
      <ClinicsCloseToPostcode />
    </div>
  );
};

export default RecommendPage;
