import React from "react";
import { marked } from "marked";

const RecommendPage = async () => {
  const recommendPageRes = await fetch(
    "http://127.0.0.1:1337/api/recommend-page",
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
