import { Button } from "antd";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import "./Details.css";

const Details = () => {
  const { oneProduct, getOneProduct } = useContext(contextProducts);
  const params = useParams();
  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  console.log(oneProduct);

  return (
    <div className="container">
      <div className="details">
        <div className="details_left">
          <img className="details_img" src={oneProduct.image} alt="product" />
        </div>
        <div className="details_info">
          <div className="info_inner">
            <h2 className="info_title">{oneProduct.name}</h2>
            <h3 className="info_descr">{oneProduct.description}</h3>
            <p className="info_details">{oneProduct.produced}</p>
            <p className="info_details2">{oneProduct.details}</p>
          </div>

          <Button style={{ width: "100%" }}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default Details;
