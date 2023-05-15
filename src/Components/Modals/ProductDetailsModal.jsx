import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Slices/CartSlice";
import { useContext } from "react";
import { OpenCartContext } from "../../Context/OpenCartContext";
const useStyle = makeStyles((theme) => {
  return {
    ModalContainer: {
      width: "80%",
      maxWidth: "900px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      padding: "20px",
      background: theme.palette.white.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    ImageContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      [theme.breakpoints.down("md")]: {
        width: "60%",
      },
    },
    ContentContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
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
    divider: {
      width: "100%",
      margin: "0px auto",
      height: "2px",
      color: theme.palette.grey[500],
    },
    typo: {
      fontSize: "1rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8rem",
      },
    },
    CloseButton: {
      position: "absolute",
      top: "-10px",
      right: "-10px",
      borderRadius: "50%",
      background: theme.palette.grey[200],
    },
  };
});

const ProductDetailsModal = ({
  open,
  setOpen,
  selectedProduct,
  setselectedProduct,
}) => {
  const {
    ModalContainer,
    ImageContainer,
    ContentContainer,
    saleContainer,
    priceContainer,
    QuantityContainer,
    FieldContainer,
    buttonContainer,
    divider,
    typo,
    CloseButton,
  } = useStyle();
  console.log(selectedProduct);
  const handleClose = () => {
    setOpen(false);
    setselectedProduct(null);
  };
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
      id: selectedProduct?.id,
      image: selectedProduct?.image,
      name: selectedProduct?.name,
      quantity: quantity,
      price: selectedProduct?.discountedPrice
        ? selectedProduct?.discountedPrice
        : selectedProduct?.price,
      totalPrice:
        (selectedProduct?.discountedPrice
          ? selectedProduct?.discountedPrice
          : selectedProduct?.price) * quantity,
    };
    dispatch(addToCart(obj));
    setOpen(false)
    setOpenCart(true);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        padding: "20px",
      }}
    >
      <Box className={ModalContainer}>
        <Box className={ImageContainer}>
          <img
            src={selectedProduct?.image}
            alt={"products"}
            style={{ width: "100%" }}
          />
          {selectedProduct?.onSale ? (
            <Box className={saleContainer}>
              <Typography>Sale!</Typography>
            </Box>
          ) : null}
        </Box>
        <Box className={ContentContainer}>
          <Box>
            <Typography variant="h4">{selectedProduct?.name}</Typography>
          </Box>
          <Box className={priceContainer}>
            <Typography
              variant="h6"
              className={typo}
              sx={{
                textDecoration: selectedProduct?.discountedPrice
                  ? "line-through"
                  : "none",
                color: selectedProduct?.discountedPrice
                  ? (theme) => theme.palette.grey["400"]
                  : "inherit",
              }}
            >
              $ {selectedProduct?.price}
            </Typography>
            <Typography variant="h6" className={typo}>
              $ {selectedProduct?.discountedPrice}
            </Typography>
            <Typography variant="" className={typo}>
              {selectedProduct?.freeShipping
                ? "& Free Shipping"
                : "& Shipping Charges Includes"}
            </Typography>
          </Box>
          <Box>
            <Typography variant="" className={typo}>
              {selectedProduct?.description}
            </Typography>
          </Box>
          <Box>
            <Divider className={divider} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              flexWrap: "wrap",
            }}
          >
            <Typography variant="" sx={{ fontWeight: "bold" }} className={typo}>
              Categories:{" "}
            </Typography>
            <Typography variant="" className={typo}>
              {selectedProduct?.category?.join(",")}
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
        <Box className={CloseButton}>
          <IconButton>
            <CloseIcon
              sx={{
                fontSize: "16px",
                color: (theme) => theme.palette.black.main,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProductDetailsModal;
