import React from "react";
import { useRouter } from "next/router";

//SSR

const Productid = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id" - id);
  return (
    <div className="bg-info">
      <h2> Product ID - {id}</h2>
    </div>
  );
};

export default Productid;
