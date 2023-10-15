import React from "react";
import classes from "./public.module.css";
import Link from "next/link";

const Public = async (props) => {
  const footerRes = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/footer?populate=*`,
  );
  const { data, error } = await footerRes.json();
  if (error) {
    return <div>Failed to load footer</div>;
  }
  const {
    attributes: { FooterColumn },
  } = data;
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>Burnet Institute</div>
        <ul className={classes.navLinks}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <a href="#">How to Use</a>
          </li>
          <li>
            <a href="#">Tests</a>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
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
    </>
  );
};

export default Public;
