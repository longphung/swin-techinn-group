import React from "react";
import Public from "src/layouts/Public/Public.jsx";
import Analytics from "components/Analytics/Analytics";

const PublicLayout = (props) => {
  return (
    <Public>
      {props.children}
      <Analytics />
    </Public>
  );
};

export default PublicLayout;
