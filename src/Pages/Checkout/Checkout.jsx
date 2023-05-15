import {
  Box,
  Button,
  Checkbox,
  FormControl,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import aboutus from "../../Assets/checkout.jfif";
import TopBanner from "../../Components/TopBanner/TopBanner";
import { Country } from "country-state-city";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useSelector } from "react-redux";
import { getCartValues } from "../../Redux/Slices/CartSlice";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useContext } from "react";
import { snackBarContext } from "../../Context/SnackBarContext";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
import PaypallButtonWrapper from "../../Components/PaypallButtonWrapper/PaypallButtonWrapper";
import { getLoginValue } from "../../Redux/Slices/LoginSlice";
import { useNavigate } from "react-router";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      transition: "0.5s",
      display: "flex",
      justifyContent: "center",
      color: theme.palette.grey[600],
      background: theme.palette.background.secondary,
    },

    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      display: "flex",
      alignItems: "start",
      justifyContent: "center",
      gap: "20px",
      padding: "40px 10px",
      transition: "0.5s",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    formContainer: {
      width: "100%",
      border: `1px solid ${theme.palette.grey[300]}`,
    },
    FormBox: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      padding: "10px",
    },
    FieldInRow: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    CartSection: {
      width: "50%",
      border: `1px solid ${theme.palette.grey[300]}`,
      position: "sticky",
      top: 100,
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    typo: {
      transition: "0.5s",
      "&:hover": {
        cursor: "pointer",
        color: theme.palette.primary.main,
      },
    },
    TypoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 10px",
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
      [theme.breakpoints.down("md")]: {},
    },
    productContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
  };
});

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  note: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  zipCode: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  apartmentNumber: Yup.string().required("Required"),
  houseNumber: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  companyName: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  firstname: Yup.string().required("Required"),
});

const initialValues = {
  note: "",
  phone: "",
  zipCode: "",
  state: "",
  city: "",
  apartmentNumber: "",
  houseNumber: "",
  country: "",
  companyName: "",
  lastname: "",
  firstname: "",
  email: "",
};

const Checkout = () => {
  const {
    container,
    subContainer,
    formContainer,
    CartSection,
    FormBox,
    FieldInRow,
    typo,
    TypoContainer,
    productContainer,
  } = useStyle();
  const [allCountries, setallCoutries] = useState(null);
  const [applycoupon, setapplycoupon] = useState(false);
  const [totalPrice, settotalPrice] = useState(0);
  const { setsnackbarData } = useContext(snackBarContext);
  const [cashonDelivery, setcashOnDelivery] = useState(false);
  const { cart } = useSelector(getCartValues);
  const navigate = useNavigate();
  const { isLogedin } = useSelector(getLoginValue);
  useEffect(() => {
    setallCoutries(Country.getAllCountries());
  }, []);
  useEffect(() => {
    let sum = 0;
    cart?.forEach((data) => {
      sum = sum + data?.totalPrice;
    });
    settotalPrice(+sum);
  }, [cart]);

  const handleSubmit = async (values, setSubmitting, resetForm) => {
    console.log(values);
    if (!isLogedin) {
      navigate("/login");
    } else {
      alert("order placed");
    }
  };

  const handleApplyCoupon = (value) => {
    if (!value) {
      return setsnackbarData({
        openToast: true,
        type: "error",
        message: "Please enter coupon code.!",
      });
    }
    console.log(value);
  };

  const handleCashOnDelivery = (e) => {
    setcashOnDelivery(e.target.checked);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      handleSubmit(values, setSubmitting, resetForm);
    },
  });
  return (
    <Box>
      <TopBanner bg={aboutus} Text={"Checkout"} PageName={"Checkout"} />
      {cart?.length > 0 ? (
        <Box className={container}>
          <Box className={subContainer}>
            <Box className={formContainer}>
              <form onSubmit={formik.handleSubmit}>
                <Box className={FormBox}>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      Customer information
                    </Typography>
                  </Box>
                  <Box>
                    <FormControl fullWidth>
                      <TextField
                        name="email"
                        size="small"
                        placeholder="Email Address *"
                        fullWidth
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.errors.email && formik.touched.email}
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      Billing details
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <Box className={FieldInRow}>
                      <FormControl fullWidth>
                        <TextField
                          name="firstname"
                          size="small"
                          placeholder="First Name *"
                          fullWidth
                          value={formik.values.firstname}
                          onChange={formik.handleChange}
                          error={
                            formik.errors.firstname && formik.touched.firstname
                          }
                          helperText={
                            formik.touched.firstname && formik.errors.firstname
                          }
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          name="lastname"
                          size="small"
                          placeholder="Last Name *"
                          fullWidth
                          value={formik.values.lastname}
                          onChange={formik.handleChange}
                          error={
                            formik.errors.lastname && formik.touched.lastname
                          }
                          helperText={
                            formik.touched.lastname && formik.errors.lastname
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl fullWidth>
                        <TextField
                          name="companyName"
                          size="small"
                          placeholder="Company Name *"
                          fullWidth
                          value={formik.values.companyName}
                          onChange={formik.handleChange}
                          error={
                            formik.errors.companyName &&
                            formik.touched.companyName
                          }
                          helperText={
                            formik.touched.companyName &&
                            formik.errors.companyName
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl fullWidth>
                        <TextField
                          name="country"
                          size="small"
                          placeholder="Country/Region *"
                          label={"Country/Region *"}
                          fullWidth
                          select
                          value={formik.values.country}
                          onChange={formik.handleChange}
                          error={
                            formik.errors.country && formik.touched.country
                          }
                          helperText={
                            formik.touched.country && formik.errors.country
                          }
                        >
                          {allCountries?.map((country, i) => {
                            return (
                              <MenuItem key={i} value={country?.name}>
                                {country?.name}
                              </MenuItem>
                            );
                          })}
                        </TextField>
                      </FormControl>
                    </Box>
                    <Box className={FieldInRow}>
                      <FormControl fullWidth>
                        <TextField
                          name="houseNumber"
                          size="small"
                          placeholder="House number and street name *"
                          fullWidth
                          value={formik.values.houseNumber}
                          onChange={formik.handleChange}
                          error={
                            formik.errors.houseNumber &&
                            formik.touched.houseNumber
                          }
                          helperText={
                            formik.touched.houseNumber &&
                            formik.errors.houseNumber
                          }
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          name="apartmentNumber"
                          size="small"
                          placeholder="Apartment, suite, units, etc (Optional) *"
                          fullWidth
                          value={formik.values.apartmentNumber}
                          onChange={formik.handleChange}
                          error={
                            formik.errors.apartmentNumber &&
                            formik.touched.apartmentNumber
                          }
                          helperText={
                            formik.touched.apartmentNumber &&
                            formik.errors.apartmentNumber
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box className={FieldInRow}>
                      <FormControl fullWidth>
                        <TextField
                          name="city"
                          size="small"
                          placeholder="Town / City *"
                          fullWidth
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          error={formik.errors.city && formik.touched.city}
                          helperText={formik.touched.city && formik.errors.city}
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          name="state"
                          size="small"
                          placeholder="State *"
                          fullWidth
                          value={formik.values.state}
                          onChange={formik.handleChange}
                          error={formik.errors.state && formik.touched.state}
                          helperText={
                            formik.touched.state && formik.errors.state
                          }
                        />
                      </FormControl>
                      <FormControl fullWidth>
                        <TextField
                          name="zipCode"
                          size="small"
                          placeholder="Zip Code *"
                          fullWidth
                          value={formik.values.zipCode}
                          onChange={formik.handleChange}
                          error={
                            formik.errors.zipCode && formik.touched.zipCode
                          }
                          helperText={
                            formik.touched.zipCode && formik.errors.zipCode
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl fullWidth>
                        <TextField
                          name="phone"
                          size="small"
                          placeholder="Phone *"
                          fullWidth
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          error={formik.errors.phone && formik.touched.phone}
                          helperText={
                            formik.touched.phone && formik.errors.phone
                          }
                        />
                      </FormControl>
                    </Box>
                  </Box>
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      Additional information
                    </Typography>
                  </Box>
                  <Box>
                    <FormControl fullWidth>
                      <TextField
                        name="note"
                        size="small"
                        placeholder="Note about your order e.g. special notes for delivery *"
                        fullWidth
                        multiline
                        minRows={5}
                        value={formik.values.note}
                        onChange={formik.handleChange}
                        error={formik.errors.note && formik.touched.note}
                        helperText={formik.touched.note && formik.errors.note}
                      />
                    </FormControl>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      transition: "0.5s",
                    }}
                  >
                    <Button
                      color={"secondary"}
                      className={typo}
                      onClick={() => setapplycoupon(!applycoupon)}
                      sx={{ width: "fit-content" }}
                    >
                      Apply Coupon?
                    </Button>
                    {applycoupon ? (
                      <Box className={FieldInRow}>
                        <FormControl fullWidth>
                          <TextField
                            name="coupon"
                            size="small"
                            placeholder="Coupon code *"
                            fullWidth
                            onChange={formik.handleChange}
                          />
                        </FormControl>
                        <Button
                          variant="contained"
                          sx={{ padding: "7px 30px" }}
                          onClick={() =>
                            handleApplyCoupon(formik.values?.coupon)
                          }
                        >
                          APPLY
                        </Button>
                      </Box>
                    ) : null}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      Payment
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0px",
                      }}
                    >
                      <Checkbox
                        name="cashondelivery"
                        checked={cashonDelivery}
                        onChange={handleCashOnDelivery}
                      />
                      <Typography sx={{ fontWeight: "bold" }}>
                        Cash on delivery
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    {isLogedin && !cashonDelivery ? (
                      <Box
                        sx={{
                          width: "100%",
                          margin: "0px auto",
                          textAlign: "center",
                        }}
                      >
                        <PaypallButtonWrapper
                          currency={"USD"}
                          showSpinner={true}
                        />
                      </Box>
                    ) : null}

                    <Box sx={{ display: "flex", gap: "20px" }}>
                      <Box>
                        <AccountBalanceWalletIcon />
                      </Box>
                      <Box>
                        <Typography>
                          Sorry, it seems that there are no available payment
                          methods for your state. Please contact us if you
                          require assistance or wish to make alternate
                          arrangements.
                        </Typography>
                      </Box>
                    </Box>
                    <Button variant="contained" fullWidth type="submit">
                      PLACE ORDER FOR $ {totalPrice?.toLocaleString()}
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
            <Box className={CartSection}>
              <Box className={TypoContainer}>
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>Products</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: "bold" }}>Subtotal</Typography>
                </Box>
              </Box>
              <Box sx={{ height: "300px", overflowY: "scroll" }}>
                {cart?.map((items, i) => {
                  return (
                    <Box key={i} className={TypoContainer}>
                      <Box className={productContainer}>
                        <img
                          src={items?.image}
                          alt={"cart products"}
                          style={{ width: "80px" }}
                        />

                        <Typography sx={{ fontWeight: "bold" }}>
                          {items?.name} X {items?.quantity}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography>
                          $ {items?.totalPrice.toLocaleString()}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className={TypoContainer}>
                <Typography sx={{ fontWeight: "bold" }}>Subtotal</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  $ {totalPrice?.toLocaleString()}
                </Typography>
              </Box>
              <Box className={TypoContainer}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Total
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  $ {totalPrice?.toLocaleString()}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
};

export default Checkout;
