import { Box, ThemeProvider } from "@mui/system";
import React, { useEffect } from "react";
import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router";
import ScrollToTop from "react-scroll-to-top";
import CartDrawer from "./Components/CartDrawer/CartDrawer";
import { OpenCartContext } from "./Context/OpenCartContext";
import { Paths } from "./Resources/ListOfPaths/ListOfPaths";
import theme from "./Theme/theme";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SnackBar from "./Components/snackbar/Snackbar";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PaypallButtonWrapper from "./Components/PaypallButtonWrapper/PaypallButtonWrapper";
const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  const { openCart } = useContext(OpenCartContext);
  console.log(openCart);
  return (
    <Box>
      <Box>
        <Routes>
          {Paths.map((path) => {
            return <Route path={path?.path} element={path?.component} />;
          })}
        </Routes>
      </Box>

    
      <CartDrawer />
      <SnackBar />
    </Box>
  );
};

export default App;
