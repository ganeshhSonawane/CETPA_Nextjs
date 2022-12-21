import React from "react";
import Image from "next/image";
import style from "../../styles/product.module.css";

//SSG

export const getStaticPaths = async () => {
  // const arr = ["2022", "2021", "2020", "2019", "2018"];
  const response = await fetch(process.env.API_URL);
  const arr = await response.json();
  const paths = arr.map((item) => {
    return {
      params: { year: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const temp = context.params.year;
  const response = await fetch(process.env.API_URL + temp);
  const data = await response.json();
  return {
    props: {
      res: data,
      notfound: true,
    },
  };
};

const Year = ({ res }) => {
  return (
    <div className="bg-info">
      <h2> Batch Year - {res.title}</h2>
      <div className={style.product_wrap}>
              <Image
                className={style.product_img}
                src={res.image}
                width={150}
                height={200}
                alt={res.title}
              ></Image>
              <p className={style.product_title}>{res.title}</p>
              <p className={style.product_desc}>{res.description}</p>
              <p className={style.product_price}>{"Rs." + res.price}</p>
            </div>
    </div>
  );
};

export default Year;
