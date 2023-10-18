import React from "react";
import classes from "./public.module.css";
import Link from "next/link";
import TopBarLogin from "components/TopBarLogin/TopBarLogin";

const Public = async (props) => {
  const footerRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/footer?populate=*`,
  );
  const { data, error } = await footerRes.json();
  if (error) {
    return <div>Failed to load footer</div>;
  }
  const headerRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/headers`,
  );
  const { data: headerData, error: headerError } = await headerRes.json();
  if (headerError) {
    console.error(headerError);
    return <div>Failed to load header</div>;
  }
  const {
    attributes: { FooterColumn },
  } = data;
  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          HIVTestHub
        </Link>
        <ul className={classes.navLinks}>
          {headerData.map(({ attributes: { name, linkTo } }) => (
            <li key={name}>
              <Link href={linkTo}>{name}</Link>
            </li>
          ))}
          <TopBarLogin />
        </ul>
      </header>

      {/* Main Content */}
      <main className={classes.main}>{props.children}</main>

      {/* Footer */}
      <footer className={classes.footer}>
        {FooterColumn.map((col) => (
          <div className={classes.footerColumn} key={col.id}>
            <h2>{col.FooterColumnTitle}</h2>
            <ul>
              {Object.entries(col.FooterColumnValues).map(
                ([title, link], i) => (
                  <li key={i}>
                    <Link href={link}>{title}</Link>
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </footer>
    </div>
  );
};

export default Public;
