import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { snackBarContext } from "../../Context/SnackBarContext";

const SnackBar = () => {
  const { snackbarData, setsnackbarData } = useContext(snackBarContext);
  const handleClose = () => {
    setsnackbarData({
      openToast: false,
      type: "success",
      message: "",
    });
  };
  return (
    <Snackbar
      open={snackbarData?.openToast}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={snackbarData?.type}
        sx={{ width: "100%" }}
      >
        {snackbarData?.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
