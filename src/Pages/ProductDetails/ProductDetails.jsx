import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import products from "../../Assets/products.jpg";
import TopBanner from "../../Components/TopBanner/TopBanner";
import { ProductData } from "../../Resources/ProductData/ProductData";
import { useEffect } from "react";
import { useParams } from "react-router";
import ProductDetailSection from "../../Components/ProductDetails/ProductDetailSection/ProductDetailSection";


const useStyle = makeStyles((theme)=>{
    return {
      container: {
        display: "flex",
        flexDirection: "column",

        background: theme.palette.background.secondary,
      },
    };
})


const ProductDetails = () => {
  const [product, setproduct] = useState(null);
  const {container} = useStyle()
  const { id } = useParams();
  useEffect(() => {
    let value = ProductData?.find((data) => data?.id === id);
    setproduct(value);
  }, []);

  return (
    <Box>
      <TopBanner bg={products} Text={"Products"} PageName={"Products"} />
      <Box className={container}>
        <ProductDetailSection product={product} />
      </Box>
    </Box>
  );
};

export default ProductDetails;
