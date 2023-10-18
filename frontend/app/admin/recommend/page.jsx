import React from "react";
import ClinicsCloseToPostcode from "components/ClinicsCloseToPostcode/ClinicsCloseToPostcode";

const RecommendPage = async () => {
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

  return (
    <div>
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
