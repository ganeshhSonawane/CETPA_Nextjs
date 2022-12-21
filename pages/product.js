import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/product.module.css";
import { useRouter } from "next/router";
//ssg - build
export const getStaticProps = async () => {
  const response = await fetch(process.env.API_URL);
  const data = await response.json(); //To convert stringify json to parsed json
  return {
    props: { productData: data },
  };
};

const Product = (props) => {
  const router = useRouter();
  useEffect(() => {
    let loginStatus = localStorage.getItem("loginStatus");
    if (!loginStatus) {
      router.push("/login");
    }
  });
  const { productData } = props;
  return (
    <div className="row">
      <ul className={style.product_list}>
        {productData.map((item) => (
          <li
            className={[style.product_list_item, "col-sm-3"].join(" ")}
            key={item.id}
          >
            <div className={style.product_wrap}>
              <Image
                className={style.product_img}
                src={item.image}
                width={150}
                height={200}
                alt={item.title}
              ></Image>
              <Link
                href={`/product/${item.id}`}
                className={style.product_title}
              >
                {item.title}
              </Link>
              <p className={style.product_desc}>{item.description}</p>
              <p className={style.product_price}>{"Rs." + item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
