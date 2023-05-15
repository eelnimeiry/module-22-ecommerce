import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { ProductData } from "../../../Resources/ProductData/ProductData";

import ProductDetailsModal from "../../Modals/ProductDetailsModal";
import ProductCards from "../../Cards/ProductCards";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-evenly",
      },
    },
  };
});

const FeaturesProducts = () => {
  const { container, subContainer } = useStyle();
  const [selectedProduct, setselectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = (data) => {
    console.log(data);
    setselectedProduct(data);
    setOpen(true);
  };
  return (
    <>
      <Box className={container}>
        <Box className={subContainer}>
          {ProductData?.map((data, i) => {
            if (i < 4) {
              return (
                <ProductCards key={i} data={data} handleOpen={handleOpen} />
              );
            }
          })}
        </Box>
      </Box>
      {open && selectedProduct ? (
        <ProductDetailsModal
          open={open}
          setOpen={setOpen}
          selectedProduct={selectedProduct}
          setselectedProduct={setselectedProduct}
        />
      ) : null}
    </>
  );
};

export default FeaturesProducts;
