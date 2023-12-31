import React from "react";
import Image from "next/image";

import whiteEllipse from "./white-ellipse.png";
import blackEllipse from "./black-ellipse.png";
import classes from "./home.module.css";
import Button from "components/Button/Button";
import Link from "next/link";

async function HomePage() {
  const homePage = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL +
      "/api/home-page?populate[0]=FirstSection&populate[1]=SecondSection.SecondSectionItem,SecondSection.SecondSectionItem.SecondSectionPicture,SecondSectionItem.LinkTo&populate[2]=ThirdSection.ThirdSectionTab.ThirSectionTabRow&populate=FourthSection.Chart,FourthSection.CasesEachYear,FourthSection.background,FirstSection.FirstSectionImage",
  );

  const { data, error } = await homePage.json();
  if (error) return <div>Failed to load home page</div>;
  const {
    attributes: { FirstSection, SecondSection, ThirdSection, FourthSection },
  } = data;
  return (
    <>
      <section className={classes.firstSection}>
        <article>
          <h1>{FirstSection.FirstSectionTitle}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: FirstSection.FirstSectionDescription,
            }}
          />
          <Button>{FirstSection.FirstSectionButton}</Button>
        </article>
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${FirstSection.FirstSectionImage.data.attributes.url}`}
          alt="First Section Image"
          width={FirstSection.FirstSectionImage.data.attributes.width}
          height={FirstSection.FirstSectionImage.data.attributes.height}
          priority
        />
      </section>

      <section className={classes.secondSection}>
        {SecondSection.SecondSectionItem.map((item) => (
          <article key={item.id}>
            <Link href={item.LinkTo || "/"}>
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.SecondSectionPicture.data.attributes.url}`}
                alt="Second Section Image"
                width={item.SecondSectionPicture.data.attributes.width}
                height={item.SecondSectionPicture.data.attributes.height}
              />
              <h2>{item.Title}</h2>
            </Link>
            <p>{item.Description}</p>
          </article>
        ))}
      </section>

      <section className={classes.thirdSection}>
        {ThirdSection.ThirdSectionTab.map((tab, i) => (
          <article key={tab.id}>
            <h2>{tab.Title}</h2>
            <ul>
              {tab.ThirSectionTabRow.map((row) => (
                <li key={row.id}>
                  <span>
                    <Image src={i === 0 ? whiteEllipse : blackEllipse} alt="" />
                    <p>{row.ThirdSectionTabRowContent.left}</p>
                  </span>
                  <p>{row.ThirdSectionTabRowContent.right}</p>
                </li>
              ))}
            </ul>
            <div className={classes.thirdSectionButtonContainer}>
              <Button variant={i === 0 && "secondary"}>Learn More</Button>
            </div>
          </article>
        ))}
      </section>

      <section className={classes.fourthSection}>
        <div className={classes.fourthSectionChart}>
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${FourthSection.CasesEachYear.data.attributes.url}`}
            alt="Cases Each Year"
            width={FourthSection.CasesEachYear.data.attributes.width}
            height={FourthSection.CasesEachYear.data.attributes.height}
          />
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${FourthSection.Chart.data.attributes.url}`}
            alt="Chart"
            width={FourthSection.Chart.data.attributes.width}
            height={FourthSection.Chart.data.attributes.height}
          />
        </div>
        <article>
          <div
            dangerouslySetInnerHTML={{ __html: FourthSection.Description }}
          />
        </article>
      </section>
    </>
  );
}

export default HomePage;
