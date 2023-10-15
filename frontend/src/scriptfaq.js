const faqData = [
  {
    question: "What is HIV?",
    answer:
      "HIV (Human Immunodeficiency Virus) is a virus that attacks the body's immune system, specifically the CD4 cells (T cells), which help the immune system fight off infections. If left untreated, HIV can lead to AIDS (Acquired Immunodeficiency Syndrome), a condition in which the immune system is severely damaged, and the body struggles to fight off diseases and infections.",
  },
  {
    question: "How is HIV transmitted?",
    answer:
      "HIV can be transmitted through contact with certain body fluids from a person who has HIV. The most common modes of transmission include unprotected sexual intercourse, sharing needles or syringes with someone who has HIV, and from mother to child during childbirth or breastfeeding. It is not transmitted through casual contact such as shaking hands or sharing utensils.",
  },
  {
    question: "What are the symptoms of HIV?",
    answer:
      "In the early stages of HIV infection, many people may not experience any symptoms. However, some individuals may develop flu-like symptoms within a few weeks of infection, such as fever, fatigue, and swollen lymph nodes. As the infection progresses, without treatment, it can lead to more severe symptoms and opportunistic infections.",
  },
  {
    question: "How can HIV be prevented?",
    answer:
      "HIV can be prevented by practicing safe sex, which includes using condoms and getting regular HIV testing if you are sexually active. Avoid sharing needles or syringes with others, and consider pre-exposure prophylaxis (PrEP) for individuals at high risk. Additionally, early detection and treatment of HIV can help prevent its progression and transmission.",
  },
  {
    question: "Is there a cure for HIV?",
    answer:
      "As of my last knowledge update in September 2021, there is no cure for HIV. However, antiretroviral therapy (ART) can effectively control the virus, allowing people with HIV to live long and healthy lives. Research into HIV treatments and vaccines continues, but a complete cure has not yet been discovered.",
  },
];
const faqContainer = document.getElementById("faqContainer");

faqData.map(function (item) {
  let div = document.createElement("div");
  div.className = "faqItem";
  const markup = `
    <div class="itemQuestion">
        <span class="question">${item.question}</span>
        <span class="arrowContainer">
            <span class="expand">+</span>
            <span class="close">x</span>
        </span>
    </div>
    
    <div class="itemAnswer">
        <span class="answer">${item.answer}</span>
    </div>
    <hr>
    `;

  div.innerHTML = markup;
  faqContainer.appendChild(div);
});

const arrowContainer = document.querySelectorAll(".arrowContainer");

arrowContainer.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const parent = e.currentTarget.parentElement.parentElement;
    parent.classList.toggle("showAnswer");
  });
});
