import React from "react";

const FaqPage = async () => {
  const faqRes = await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/faq-page?populate=*");
  const {
    data: {
      attributes: { qaPair },
    },
  } = await faqRes.json();
  return qaPair.map(({ question, answer, id }) => (
    <div key={id}>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  ));
};

export default FaqPage;
