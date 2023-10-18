import "./style.css";
import ToastContainer from "components/ToastContainer/ToastContainer";
import Analytics from "components/Analytics/Analytics";
import React from "react";

/* eslint-disable */
export const metadata = {
  title: "Burnet Institute",
  description:
    "Burnet is an Australian-based medical research institute and an accredited international non-government organisation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  );
}
