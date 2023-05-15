
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { Box, CircularProgress } from "@mui/material";

// This values are the props in the UI
const amount = "2";
const style = {
  layout: "vertical",
  width: "100%",
  border: "1px solid red",
  margin: "0px auto",
};

// Custom component to wrap the PayPalButtons and handle currency changes
const PaypallButtonWrapper = ({ currency }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{  isPending }] = usePayPalScriptReducer();



  return (
    <>
      {isPending && (
        <Box>
          <CircularProgress />
        </Box>
      )}
      <PayPalButtons
        style={{ width: "1500px" }}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};

export default PaypallButtonWrapper;
