import {
  Box,
  Button,
  Divider,
  IconButton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartValues,
  removeFromCart,
  setcartvalues,
} from "../../Redux/Slices/CartSlice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { OpenCartContext } from "../../Context/OpenCartContext";

const useStyle = makeStyles((theme) => {
  console.log(theme);
  return {
    container: {
      width: "550px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "20px",
      alignItems: "start",
      height: "94vh",
      padding: "30px 20px 0px 20px",
      color: theme.palette.grey[500],
      [theme.breakpoints.down("md")]: {
        width: "90vw",
        padding: " 20px 10px",
      },
    },
    headingContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "100%",
    },
    itemsContainer: {
      display: "flex",
      flexDirection: "column",
      // borderBottom: `1px solid ${theme.palette.grey[200]}`,
      gap: "20px",
      width: "100%",
      height: "60vh",
      overflow: "hidden",
      overflowY: "scroll",
    },
    subTotalContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 0px",
      borderTop: `1px solid ${theme.palette.grey[200]}`,
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
    },
    buttonsContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    OutlinedButton: {
      width: "100%",
      border: `1px solid ${theme.palette.primary.main}`,
      transition: "0.5s",
      padding: "10px 30px",
      "&:hover": {
        background: theme.palette.secondary.main,
      },
    },
    items: {
      display: "flex",
      gap: "20px",
      width: "100%",
      padding: "10px 0px",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: `1px solid ${theme.palette.grey[200]}`,
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "start",
      },
    },
    priceContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
    },
    QuantityContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    quantityBox: {
      padding: "10px 20px",
      border: `1px solid ${theme.palette.grey[200]}`,
    },
    ItemsDetailContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
});

const CartDrawer = () => {
  const {
    container,
    headingContainer,
    itemsContainer,
    subTotalContainer,
    buttonsContainer,
    OutlinedButton,
    priceContainer,
    items,
    QuantityContainer,
    quantityBox,
    ItemsDetailContainer,
  } = useStyle();
  const { cart } = useSelector(getCartValues);
  const { openCart, setOpenCart } = useContext(OpenCartContext);
  const [cartItems, setcartItems] = useState(null);
  const [totalPrice, settotalPrice] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setcartItems(cart);
  }, [cart]);
  useEffect(() => {
    let sum = 0;
    cart?.forEach((data) => {
      sum = sum + data?.totalPrice;
    });
    settotalPrice(+sum);
  }, [cartItems]);
  const handleClose = () => {
    setOpenCart(false);
  };
  const addquantity = (id) => {
    let items = JSON.parse(JSON.stringify(cart));
    let value = items?.filter((data) => {
      if (data?.id === id && data?.quantity < 10) {
        data.quantity += 1;
        data.totalPrice = parseInt(data.quantity) * data.price;
      }
      return data;
    });
    dispatch(setcartvalues(value));
  };
  const removeQuantity = (id) => {
    let items = JSON.parse(JSON.stringify(cart));
    let value = items?.filter((data) => {
      if (data?.id === id && data?.quantity > 1) {
        data.quantity -= 1;
        data.totalPrice = parseInt(data.quantity) * data.price;
      }
      return data;
    });
    dispatch(setcartvalues(value));
  };
  const RemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    console.log(id);
  };
  return (
    <SwipeableDrawer anchor="right" open={openCart} onClose={handleClose}>
      <Box className={container}>
        <Box className={headingContainer}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Shopping Cart
          </Typography>
          <Divider sx={{ height: "2px", width: "100%" }} />
        </Box>
        <Box className={`${itemsContainer} cartdrawerItems`}>
          {cartItems?.map((data, i) => {
            return (
              <Box key={i} className={items}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "start",
                  }}
                >
                  <img
                    src={data?.image}
                    alt={"product"}
                    style={{ width: "80px" }}
                  />
                </Box>
                <Box className={ItemsDetailContainer}>
                  <Box>
                    <Typography>{data?.name}</Typography>
                    <Box className={QuantityContainer}>
                      <IconButton
                        onClick={() => {
                          removeQuantity(data?.id);
                        }}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Box className={quantityBox}>
                        <Typography>{data?.quantity}</Typography>
                      </Box>
                      <IconButton
                        onClick={() => {
                          addquantity(data?.id);
                        }}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box className={priceContainer}>
                    <Box>
                      <IconButton
                        onClick={() => {
                          RemoveFromCart(data?.id);
                        }}
                      >
                        <HighlightOffIcon />
                      </IconButton>
                    </Box>
                    <Box>
                      <Typography>$ {data?.totalPrice}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box className={subTotalContainer}>
          <Typography sx={{ fontWeight: "bold" }}>Subtotal:</Typography>
          <Typography>$ {totalPrice?.toLocaleString()}</Typography>
        </Box>
        <Box className={buttonsContainer}>
         
          <Button
            variant="contained"
            className={OutlinedButton}
            onClick={() => {
              navigate("/checkout");
              handleClose();
            }}
          >
            CHECKOUT
          </Button>
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default CartDrawer;
