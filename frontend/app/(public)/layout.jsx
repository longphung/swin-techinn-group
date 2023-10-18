import React from "react";
import Public from "src/layouts/Public/Public.jsx";

const PublicLayout = (props) => {
  return (
    <Public>
      {props.children}
    </Public>
  );
};

export default PublicLayout;
