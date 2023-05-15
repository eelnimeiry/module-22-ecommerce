import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      padding: "50px 0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      [theme.breakpoints.down("sm")]: {
        flexWrap: "wrap",
        padding: "20px 0px",
      },
    },
    ImageContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    ContentContainer: {
      width: "100%",
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      flexDirection: "column",
    },
    ImageStyling:{
        width:'80%',
        [theme.breakpoints.down('md')]:{
            width:'100%'
        }
    }
  };
});

const IntroSection = () => {
  const { container, ImageContainer, ContentContainer, ImageStyling } =
    useStyle();
  return (
    <Box className={container}>
      <Box className={ImageContainer}>
        <img
          src={
            "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/furniture-store-about-product-img.jpg"
          }
          alt={"about us"}
          className={ImageStyling}
        />
      </Box>
      <Box className={ContentContainer}>
        <Box>
          <img
            src={
              "https://websitedemos.net/home-decor-04/wp-content/uploads/sites/644/2020/08/furniture-store-photo-of-founder.jpg"
            }
            alt={"about us"}
            style={{ width: "100%" }}
          />
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>
            Eu egestas felis et viverra amet dictum ornare turpis gravida orci
            bibendum odio sit volutpat proin at enim ultrices dolor nullam
            tortor ornare cursus nibh sit adipiscing adipiscing enim erat nunc
            donec tellus, egestas commodo netus adipiscing ultrices at phasellus
            ut vitae nunc malesuada id nec suspen disse sit turpis mauris biben
            dum amet dignissim in sit duis pharetra vehicula eget suspen disse
            at vitae integer gravida sagittis.
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>HARVEY D. GEORGE</Typography>
          <Typography color={"primary"}>Founder of Shop & Stop</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroSection;
