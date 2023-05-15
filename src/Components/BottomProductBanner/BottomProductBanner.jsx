import { Box, Button, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext } from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart } from "../../Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { OpenCartContext } from "../../Context/OpenCartContext";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      padding: "10px 20px",
      position: "sticky",
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      background: theme.palette.white.main,
      color: theme.palette.grey[500],
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    imageContainer: {
      width: "60%",
      display: "flex",
      gap: "20px",
      alignItems: "center",
      whiteSpace: "nowrap",
      [theme.breakpoints.down("lg")]: {
        width: "auto",
      },
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      gap: "10px",
      justifyContent: "end",
      alignItems: "center",
      padding: "0px 10px",
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
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
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

const BottomProductBanner = ({ product }) => {
  const {
    container,
    imageContainer,
    contentContainer,
    priceContainer,
    buttonContainer,
    FieldContainer,
    QuantityContainer,
  } = useStyle();
  const [quantity, setquantity] = useState(0);
  const { setOpenCart } = useContext(OpenCartContext);
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
      <Box className={imageContainer}>
        <Box>
          <img src={product?.image} alt={"product"} style={{ width: "50px" }} />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {product?.name}
          </Typography>
        </Box>
      </Box>
      <Box className={contentContainer}>
        <Box className={priceContainer}>
          <Typography
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
          <Typography sx={{ fontWeight: "bold" }}>
            $ {product?.discountedPrice}
          </Typography>
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
      </Box>
    </Box>
  );
};

export default BottomProductBanner;
