import { Box, Link, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Fade } from "react-awesome-reveal";
import {useNavigate } from "react-router";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      padding: "20px",
      background: theme.palette.background.footer,
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      width: "100%",
      maxWidth: "1440px",
      alignItems: "center",
     
      color:theme.palette.white.main,
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
        justifyContent: "space-between",
        flexWrap: "wrap",
      },
    },
    cardContainer: {
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      width: "100%",
      maxWidth: "300px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    iconContainer: {
      height: "50px",
      width: "50px",
      display: "flex",
      borderRadius: "50%",
      alignItems: "center",
      justifyContent: "center",
      transition: "0.5s",
      background: theme.palette.grey[900],
      "&:hover": {
        background: theme.palette.grey[700],
        cursor: "pointer",
      },
    },
    links: {
      transition: "0.5s",
      "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer",
      },
    },
  };
});

const Footer = () => {
  const {
    container,
    subContainer,
    contentContainer,
    cardContainer,
    iconContainer,
    links,
  } = useStyle();


  return (
    <Box className={container}>
      <Box className={subContainer}>
     
        <Box>
          <Typography sx={{ fontWeight: 400 }}>
            Copyright All rights reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
