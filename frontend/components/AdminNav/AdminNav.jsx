"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AdminNav = (props) => {
  const { data = [] } = props;
  const pathname = usePathname();
  const routeData = data.find(({ link_to }) => link_to === pathname) || {};
  const mainRoutes = data.filter(({ parent_id }) => !parent_id);
  const subRoutes = data.filter(({ parent_id }) => routeData.id === parent_id);
  return (
    <>
      <h1>{routeData.name || ""}</h1>

      <nav>
        {subRoutes.map(({ link_to, name, id }) => (
          <Link href={link_to} key={id}>
            {name}
          </Link>
        ))}
      </nav>

      <nav>
        {mainRoutes.map(({ link_to, name, id }) => (
          <Link href={link_to} key={id}>
            {name}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default AdminNav;
