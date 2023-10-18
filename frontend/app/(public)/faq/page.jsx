import React from "react";

const FaqPage = async () => {
  const faqRes = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL + "/api/faq-page?populate=*",
  );
  const { data, error } = await faqRes.json();
  if (error) {
    return <div>Failed to load FAQ page</div>;
  }
  const {
    attributes: { qaPair },
  } = data;
  return qaPair.map(({ question, answer, id }) => (
    <div key={id}>
      <h2>{question}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: answer,
        }}
      />
    </div>
  ));
};

export default FaqPage;
