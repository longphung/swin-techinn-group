"use client";

import React from "react";
import classes from "./Button.module.css";

const mapVariantToClass = {
  secondary: classes.secondary,
  small: classes.small,
};

const Button = ({
  children,
  className = "",
  type = "button",
  as = "button",
  variant = "primary",
  ...rest
}) => {
  return React.createElement(
    as,
    {
      ...rest,
      className: `${classes.button} ${className} ${
        mapVariantToClass[variant] || ""
      }`,
      type,
    },
    children,
  );
};

export default Button;
