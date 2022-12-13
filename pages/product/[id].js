import React from "react";
import Image from 'next/image'
import style from '../../styles/product.module.css';

//Server side rendering dynamic routing

export const getServerSideProps = async (context) => {
    const id = context.params.id;
    console.log('id' - id);
    const response = await fetch(process.env.API_URL + id);
    const data = await response.json(); //To convert stringify json to parsed json
    return {
        props: { productData: data }
    }
}

const ProductId = ({ productData }) => {
    return (
        <div className="row">
            <div class="d-flex justify-content-center align-items-center vh-100">
                <div className="col-sm-6">
                    <Image src={productData.image} alt={productData.title} width={500} height={500}></Image>
                </div>
                <div className="col-sm-6">
                    <p className={style.product_detail_title}>{productData.title} ({productData.rating.count})</p>
                    <p className={style.product_detail_rating}>Ratings: {productData.rating.rate} <i className="fa fa-star text-success"></i></p>
                    <p className={style.product_detail_desc}>{productData.description}</p>
                    <p className={style.product_detail_price}>{"Rs." + productData.price}<span>(inclusive of all taxes)</span></p>
                    <button type="button" className={style.add_to_cart}>Add to Bag</button>
                </div>
            </div>
        </div>
    )
}

export default ProductId; 