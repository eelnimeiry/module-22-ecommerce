import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",

      justifyContent: "start",

      position: "relative",
      gap: "20px",
      background: theme.palette.white.main,
      padding: "50px",
      width: "100%",
      maxWidth: "550px",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      textAlign: "left",
      transition: "0.5s",
      "&:hover": {
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        transform: "scale(1.05)",
      },
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
        padding: "20px",
      },
    },
    imageContainer: {
      width: "35%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    contentContainer: {
      width: "75%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  };
});

const TestimonialCards = ({ data }) => {
  const { container, imageContainer, contentContainer } = useStyle();
  return (
    <Box className={container}>
      <Box className={imageContainer}>
        <img src={data?.image} alt={"customers"} style={{ width: "100%" }} />
      </Box>
      <Box className={contentContainer}>
        <Box>
          <FormatQuoteIcon color="primary" sx={{ fontSize: "35px" }} />
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {data?.name}
          </Typography>
          <Typography color="primary">{data?.jobdesc}</Typography>
        </Box>

        <Typography sx={{ color: (theme) => theme.palette.grey["400"] }}>
          {data?.msg}
        </Typography>
      </Box>
    </Box>
  );
};

export default TestimonialCards;
