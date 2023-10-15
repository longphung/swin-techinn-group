import React from "react";

const FaqPage = async () => {
  const faqRes = await fetch("http://127.0.0.1:1337/api/faq-page?populate=*");
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
