import { Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Slices/CartSlice";
import { useContext } from "react";
import { OpenCartContext } from "../../Context/OpenCartContext";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      width: "100%",
      maxWidth: "280px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      flexDirection: "column",
      transition: "0.5s",
      textAlign: "center",
      cursor: "pointer",
      border: "1px solid grey",
      "&:hover": {
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        transform: "scale(1.005)",
      },
    },
    ImageContainer: {
      height: "267px",
      position: "relative",
      overflow: "hidden",
    },
    contentContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "2px",
      padding: "10px 0px",
    },
    priceContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    saleContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      padding: "5px 10px",
      borderRadius: "50%",
      background: theme.palette.white.main,
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      color: theme.palette.grey["600"],
    },
    iconsContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      position: "absolute",
      top: 10,
      right: -35,
      transition: "0.5s",
    },
    IconsBox: {
      height: "30px",
      width: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      borderRadius: "50%",
    },
    icons: {
      color: theme.palette.grey["500"],
    },
  };
});

const ProductCards = ({ data, handleOpen }) => {
  const {
    container,
    ImageContainer,
    contentContainer,
    priceContainer,
    saleContainer,
    iconsContainer,
    IconsBox,
    icons,
  } = useStyle();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setOpenCart } = useContext(OpenCartContext);
  const handleNavigate = (e) => {
    e.stopPropagation();
    navigate(`/products/${data?.id}`);
  };
  const handleOpenCart = (e) => {
    e.stopPropagation();
    let obj = {
      id: data?.id,
      image: data?.image,
      name: data?.name,
      quantity: 1,
      price: data?.discountedPrice ? data?.discountedPrice : data?.price,
      totalPrice: data?.discountedPrice ? data?.discountedPrice : data?.price,
    };
    dispatch(addToCart(obj));
    setOpenCart(true);
  };
  return (
    <>
      <Box className={container} onClick={handleNavigate}>
        <Box className={`${ImageContainer} ProductCardImage`}>
          <img
            src={data?.image}
            alt={"product images"}
            style={{ width: "100%" }}
          />
          {data?.onSale ? (
            <Box className={saleContainer}>
              <Typography>Sale!</Typography>
            </Box>
          ) : null}
          <Box className={`${iconsContainer} cartIcons`}>
            <Box className={IconsBox}>
              <IconButton onClick={handleOpenCart}>
                <ShoppingBasketIcon className={icons} />
              </IconButton>
            </Box>
            <Box className={IconsBox}>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpen(data);
                }}
              >
                <RemoveRedEyeIcon className={icons} />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box className={contentContainer}>
          <Typography sx={{ color: (theme) => theme.palette.grey[400] }}>
            {data?.category[0]}
          </Typography>
          <Typography color={"primary"} sx={{ fontWeight: "bold" }}>
            {data?.name}
          </Typography>
          <Box className={priceContainer}>
            <Typography
              sx={{
                textDecoration: data?.discountedPrice ? "line-through" : "none",
                color: data?.discountedPrice
                  ? (theme) => theme.palette.grey["400"]
                  : "inherit",
              }}
            >
              $ {data?.price.toLocaleString()}
            </Typography>
            {data?.discountedPrice ? (
              <Typography>
                $ {data?.discountedPrice.toLocaleString()}
              </Typography>
            ) : null}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductCards;
