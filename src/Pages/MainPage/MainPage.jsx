import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const MainPage = ({ ActivePage }) => {
  const [state, setstate] = useState(false);
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY >= 400) {
        setstate(true);
      } else {
        setstate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: "0px" }}
      onScroll={(e) => {
        console.log(e);
      }}
    >
      <Box
        sx={{
          background: !state
            ? "transparent"
            : (theme) => theme.palette.background.main,
          position: state ? "sticky" : "absolute",
          top: "0px",
          width: "100%",
          transition: "0.5s",
          zIndex: "1000",
        }}
      >
        <Header />
      </Box>
      <Box>{ActivePage}</Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default MainPage;
