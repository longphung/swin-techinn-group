import React from "react";
import { marked } from "marked";

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
    <div
      dangerouslySetInnerHTML={{
        __html: marked.parse(body),
      }}
    />
  );
};

export default RecommendPage;
