import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { OpenCartContextProvider } from "./Context/OpenCartContext";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme/theme";
import { SnackBarContextProvider } from "./Context/SnackBarContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <OpenCartContextProvider>
          <SnackBarContextProvider>
            <PayPalScriptProvider
              options={{
                "client-id": "test",
                components: "buttons",
                currency: "USD",
              }}
            >
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </PayPalScriptProvider>
          </SnackBarContextProvider>
        </OpenCartContextProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
