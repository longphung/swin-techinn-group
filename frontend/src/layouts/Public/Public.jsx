import React from "react";
import classes from "./public.module.css";
import Link from "next/link";

const Public = async (props) => {
  const footerRes = await fetch("http://127.0.0.1:1337/api/footer?populate=*");
  const {
    data: {
      attributes: { FooterColumn },
    },
  } = await footerRes.json();
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
