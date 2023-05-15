import { useState } from "react";
import { createContext } from "react";

export const snackBarContext = createContext();
export const SnackBarContextProvider = ({ children }) => {
  const [snackbarData, setsnackbarData] = useState({
    openToast: false,
    type: "success",
    message: "",
  });
  return <snackBarContext.Provider value={{snackbarData,setsnackbarData}}>{children}</snackBarContext.Provider>;
};
