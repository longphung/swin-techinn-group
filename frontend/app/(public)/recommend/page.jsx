import React from "react";
import { marked } from "marked";

const RecommendPage = async () => {
  const recommendPageRes = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL + "/api/recommend-page",
  );
  const {
    data: {
      attributes: { body },
    },
  } = await recommendPageRes.json();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked.parse(body),
      }}
    />
  );
};

export default RecommendPage;
