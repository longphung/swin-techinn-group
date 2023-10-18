import React from "react";
import Image from "next/image";
import classes from "./Purchase.module.css";
import Button from "../../../components/Button/Button";
import Link from "next/link";

const PurchasePage = async () => {
  const purchaseRes = await fetch(
    process.env.NEXT_PUBLIC_STRAPI_URL + "/api/purchase?populate=*",
  );
  const { data, error } = await purchaseRes.json();
  if (error) {
    console.error(error);
    return <div>Failed to load purchase page</div>;
  }
  console.log(data);
  const {
    attributes: { testImage, productDescription },
  } = data;
  return (
    <div className={classes.container}>
      <Image
        src={process.env.NEXT_PUBLIC_STRAPI_URL + testImage.data.attributes.url}
        alt={"Product Image"}
        width={500}
        height={500}
      />
      <div className={classes.description}>
        <div
          dangerouslySetInnerHTML={{
            __html: productDescription,
          }}
        />

        <Button
          as={Link}
          href={"https://atomohivtest.com/home.php"}
          target={"_blank"}
          variant={"small"}
        >
          Purchase
        </Button>
      </div>
    </div>
  );
};

export default PurchasePage;
