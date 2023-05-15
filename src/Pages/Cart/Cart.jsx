import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartbg from "../../Assets/cart.jpg";
import TopBanner from "../../Components/TopBanner/TopBanner";
import {
  getCartValues,
  removeFromCart,
  setcartvalues,
} from "../../Redux/Slices/CartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
import { useNavigate } from "react-router";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.background.secondary,
      color: theme.palette.grey[600],
    },
    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      background: theme.palette.white.main,
      padding: "40px 0px",
      transition: "0.5s",
    },
    contentContainer: {
      padding: "20px 20px",
    },
    contentBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    CartTableContainer: {
      width: "100%",
    },
    TotalBoxContainer: {
      width: "40%",
      padding: "20px",
      color: theme.palette.grey[500],
      border: `1px solid ${theme.palette.grey[200]}`,
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      position: "sticky !important",
      top: "100px",
      [theme.breakpoints.down("md")]: {
        position:'relative',
        width:'100%',
        flexWrap: "wrap",
      },
    },
    table: {
      width: "100%",
      minWidth: "550px",
      padding: "20px",
    },
    quantityContainer: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      justifyContent: "center",
    },
    quantityBox: {
      padding: "10px 20px",
      border: `1px solid ${theme.palette.grey[200]}`,
    },
    headingContainer: {
      padding: "10px",
      border: `1px solid ${theme.palette.grey[200]}`,
    },
    Totals: {
      padding: "20px",
      border: `1px solid ${theme.palette.grey[200]}`,
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    PriceBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    couponContainer: {},
    type: {
      transition: "0.5s",
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  };
});

const Cart = () => {
  const {
    container,
    subContainer,
    contentContainer,
    contentBox,
    CartTableContainer,
    TotalBoxContainer,
    table,
    quantityContainer,
    quantityBox,
    headingContainer,
    Totals,
    PriceBox,
    couponContainer,
    type,
  } = useStyle();
  const { cart } = useSelector(getCartValues);
  const [cartItems, setcartItems] = useState(null);
  const [totalPrice, settotalPrice] = useState(0);
  const [haveCoupen, sethaveCoupon] = useState(false);
  const [couponCode, setcouponCode] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
    <Box>
      <TopBanner bg={cartbg} Text={"Cart"} PageName={"Cart"} />
      {cart?.length < 1 ? (
        <EmptyCart />
      ) : (
        <Box className={container}>
          <Box className={subContainer}>
            <Box className={contentContainer}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", padding: "20px 0px" }}
                >
                  CART.
                </Typography>
              </Box>
              <Box className={contentBox}>
                <Box className={CartTableContainer}>
                  <TableContainer component={Paper}>
                    <Table className={table}>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <Typography sx={{ fontWeight: "bold" }}>
                              Sr#.
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              sx={{ fontWeight: "bold" }}
                            ></Typography>
                          </TableCell>
                          <TableCell>
                            <Typography sx={{ fontWeight: "bold" }}>
                              Product
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography sx={{ fontWeight: "bold" }}>
                              Price
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              align="center"
                              sx={{ fontWeight: "bold" }}
                            >
                              Quantity
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography sx={{ fontWeight: "bold" }}>
                              Subtotal
                            </Typography>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cartItems?.map((data, i) => {
                          return (
                            <TableRow key={i}>
                              <TableCell>{1 + 1}</TableCell>
                              <TableCell>
                                <img
                                  src={data?.image}
                                  alt={"product"}
                                  style={{ width: "80px" }}
                                />
                              </TableCell>
                              <TableCell>{data?.name}</TableCell>
                              <TableCell>
                                $ {data?.price?.toLocaleString()}
                              </TableCell>
                              <TableCell>
                                <Box className={quantityContainer}>
                                  <IconButton
                                    onClick={() => removeQuantity(data?.id)}
                                  >
                                    <RemoveIcon />
                                  </IconButton>
                                  <Box className={quantityBox}>
                                    {data?.quantity}
                                  </Box>
                                  <IconButton
                                    onClick={() => addquantity(data?.id)}
                                  >
                                    <AddIcon />
                                  </IconButton>
                                </Box>
                              </TableCell>
                              <TableCell align="right">
                                $ {data?.totalPrice?.toLocaleString()}
                              </TableCell>
                              <TableCell>
                                <IconButton
                                  onClick={() => RemoveFromCart(data?.id)}
                                >
                                  <HighlightOffIcon />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
                <Box className={TotalBoxContainer}>
                  <Box className={headingContainer}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      Cart Totals
                    </Typography>
                  </Box>
                  <Box className={Totals}>
                    <Box className={PriceBox}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Subtotals
                      </Typography>
                      <Typography>$ {totalPrice?.toLocaleString()}</Typography>
                    </Box>
                    <Box>
                      <Divider sx={{ height: "3px" }} />
                    </Box>
                    <Box className={PriceBox}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Totals
                      </Typography>
                      <Typography>$ {totalPrice?.toLocaleString()}</Typography>
                    </Box>
                  </Box>
                  <Box className={couponContainer}>
                    <Typography
                      className={type}
                      onClick={() => sethaveCoupon(!haveCoupen)}
                    >
                      Have a coupon?.
                    </Typography>
                    {haveCoupen ? (
                      <Box sx={{ display: "flex", gap: "20px" }}>
                        <TextField
                          name="couponCode"
                          size="small"
                          fullWidth
                          placeholder="Coupon Code..."
                          onChange={(e) => setcouponCode(e.target.value)}
                        />
                        <Button
                          variant="contained"
                          sx={{ padding: "5px 30px" }}
                        >
                          APPLY
                        </Button>
                      </Box>
                    ) : null}
                  </Box>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{ width: "100%" }}
                      onClick={() => navigate("/checkout")}
                    >
                      CHECKOUT
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;
