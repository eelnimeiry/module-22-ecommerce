import { makeStyles } from "@mui/styles";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../Redux/Slices/CartSlice";
import { useContext } from "react";
import { OpenCartContext } from "../../../Context/OpenCartContext";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",

      alignItems: "center",
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: "1440px",
      gap: "50px",
      padding: "20px 20px",
      alignItems: "center",
      background: theme.palette.white.main,
      [theme.breakpoints.down("md")]: {
        gap: "20px",
      },
    },
    ProductDetailsContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    imageContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
    },
    linksContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",

      flexWrap: "wrap",
    },
    priceContainer: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      flexWrap: "wrap",
      [theme.breakpoints.down("md")]: {
        gap: "5px",
      },
    },
    QuantityContainer: {
      display: "flex",

      gap: "20px",
      flexWrap: "wrap",
      paddingTop: "10px",
    },
    FieldContainer: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px 20px",
      border: `1px solid ${theme.palette.grey[400]}`,
    },
  };
});

const ProductDetailSection = ({ product }) => {
  const [quantity, setquantity] = useState(0);
  const { setOpenCart } = useContext(OpenCartContext);
  const {
    container,
    subContainer,
    ProductDetailsContainer,
    imageContainer,
    contentContainer,
    linksContainer,
    priceContainer,
    buttonContainer,
    FieldContainer,
    QuantityContainer,
  } = useStyle();
  const dispatch = useDispatch();
  const ReduceQuantity = (e) => {
    e.stopPropagation();
    if (quantity <= 0) {
      return setquantity(0);
    }
    setquantity((quantity) => quantity - 1);
  };
  const AddQuantity = (e) => {
    e.stopPropagation();
    if (quantity >= 10) {
      return setquantity(10);
    }
    setquantity((quantity) => quantity + 1);
  };
  const handleAddToCart = (e) => {
    e.stopPropagation();
    let obj = {
      id: product?.id,
      image: product?.image,
      name: product?.name,
      quantity: quantity,
      price: product?.discountedPrice
        ? product?.discountedPrice
        : product?.price,
      totalPrice:
        (product?.discountedPrice ? product?.discountedPrice : product?.price) *
        quantity,
    };
    dispatch(addToCart(obj));
    setOpenCart(true);
  };
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={ProductDetailsContainer}>
          <Box className={imageContainer}>
            <img
              src={product?.image}
              alt={"product"}
              style={{ width: "80%" }}
            />
          </Box>
          <Box className={contentContainer}>
            <Box className={linksContainer}>
              <Typography>Home</Typography>
              <Typography>/</Typography>
              <Typography>{product?.category[0]}</Typography>
              <Typography>/</Typography>
              <Typography>{product?.name}</Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {product?.name}
              </Typography>
            </Box>
            <Box className={priceContainer}>
              <Typography
                variant="h5"
                sx={{
                  textDecoration: product?.discountedPrice
                    ? "line-through"
                    : "none",
                  color: product?.discountedPrice
                    ? (theme) => theme.palette.grey["400"]
                    : "inherit",
                  fontWeight: "bold",
                }}
              >
                $ {product?.price}
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                $ {product?.discountedPrice}
              </Typography>
              <Typography variant="h6">
                {product?.freeShipping
                  ? "& Free Shipping"
                  : "& Shipping Charges Includes"}
              </Typography>
            </Box>
            <Box>
              <Typography>{product?.description}</Typography>
            </Box>
            <Box className={QuantityContainer}>
              <Box className={FieldContainer}>
                <IconButton onClick={ReduceQuantity}>
                  <RemoveIcon />
                </IconButton>
                <Box className={buttonContainer}>
                  <Typography
                    variant=""
                    color={"primary"}
                    sx={{ fontWeight: "bold" }}
                  >
                    {quantity}
                  </Typography>
                </Box>
                <IconButton onClick={AddQuantity}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Box>
                <Button variant="contained" onClick={handleAddToCart}>
                  ADD TO CART
                </Button>
              </Box>
            </Box>
            <Box>
              <Divider sx={{ width: "100%", height: "2px" }} />
            </Box>
            <Box>
              <Typography>
                Categories: {product?.category?.join(", ")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailSection;
