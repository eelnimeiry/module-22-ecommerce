import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useState } from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ChairIcon from "@mui/icons-material/Chair";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      padding: "50px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.grey[500],
    },
    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      background: theme.palette.white.main,
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    content: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    imageContainer: {
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    },
    contentBox: {
      width: "100%",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      [theme.breakpoints.down('md')]:{
        width:'auto',
        maxWidth:'100%'
      }
    },
    card: {
      display: "flex",
      gap: "10px",
    },
  };
});

const ProductQualityBanner = () => {
  const {
    container,
    subContainer,
    contentContainer,
    content,
    imageContainer,
    contentBox,
    card,
  } = useStyle();
  const [cardData] = useState([
    {
      icon: <ChairIcon color="primary" />,
      title: "Huge Selection",
      desc: "Sagittis enim, auctor ultrices dui etiam viverra nulla.",
    },
    {
      icon: <AccountBalanceWalletIcon color="primary" />,
      title: "Low Price Everyday",
      desc: "Tincidunt sed eget nunc tellus viverra sapien massa cursus.",
    },
    {
      icon: <LocalShippingIcon color="primary" />,
      title: "Same Day Delivery",
      desc: "Pretium, tempus ultricies lacus eleifend scelerisque sem.",
    },
  ]);
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={contentContainer}>
          <Box className={content}>
            <Box className={contentBox}>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                The Best Quality Furniture Store in Town
              </Typography>
              <Box>
                <Typography>
                  Sagittis enim, auctor ultrices dui etiam viverra nulla
                  scelerisque in semper porttitor pharetra, tortor amet lorem
                  cursus velit posuere tristique tempus, tincidunt non velit
                  quis congue lectus a ullamcorper iaculis.
                </Typography>
              </Box>
              <Box>
                {cardData?.map((data, i) => {
                  return (
                    <Box key={i} className={card}>
                      <Box>{data?.icon}</Box>
                      <Box>
                        <Typography sx={{fontWeight:'bold'}}>{data?.title}</Typography>
                        <Typography>{data?.desc}</Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
          <Box className={`${content} ${imageContainer}`}>
            <img
              src={
                "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/furniture-store-about-store-img.jpg"
              }
              alt={"quality"}
              style={{ width: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductQualityBanner;
