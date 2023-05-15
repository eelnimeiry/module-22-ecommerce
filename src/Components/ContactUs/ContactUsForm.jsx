import {
  Box,
  Button,
  FormControl,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import PinDropIcon from "@mui/icons-material/PinDrop";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import NearMeIcon from "@mui/icons-material/NearMe";
const useStyle = makeStyles((theme) => {
  return {
    formContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      padding: "20px 0px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    SectionContainer: {
      width: "100%",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      overflow:'hidden',
      gap: "20px",
      padding: "40px 20px",
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    },
    iconsContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    iconsBox: {
      flex: 1,
      display: "flex",
      gap: "20px",
    },
    Typo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: theme.palette.grey[500],
      transition: "0.5s",
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    formBox: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      border: `1px solid ${theme.palette.grey[200]}`,
      padding: "20px",
    },
    label:{
        height:'100px',
        width:'100px',
        background:theme.palette.primary.main,
        transform:'rotate(45deg)',
        position:'absolute',
        top:'-50px',
        right:'-50px'
    }
  };
});

const ContactUsForm = () => {
  const {
    formContainer,
    SectionContainer,
    iconsContainer,
    iconsBox,
    Typo,
    formBox,
    label,
  } = useStyle();
  const [icons] = useState([
    {
      icon: <FacebookIcon />,
      link: "https://facebook.com",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com",
    },
    {
      icon: <InstagramIcon />,
      link: "https://instagram.com",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://youtube.com",
    },
    {
      icon: <GoogleIcon />,
      link: "https://google.com",
    },
  ]);
  return (
    <Box className={formContainer}>
      <Box className={SectionContainer}>
        <Box>
          <PinDropIcon color="primary" sx={{ fontSize: "55px" }} />
        </Box>
        <Box>
          <Typography color={"primary"}>OUR STORE</Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            3538 Torrance Blvd, Torrance, CA 90503, USA
          </Typography>
        </Box>
        <Box>
          <Typography>
            Posuere sagittis ultricies enim massa nisi neque augue in
            condimentum lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
        </Box>
        <Box className={iconsContainer}>
          <Box className={iconsBox}>
            {icons?.map((data, i) => {
              return (
                <Link
                  key={i}
                  href={data?.link}
                  target={"_blank"}
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  <Box className={Typo}>{data?.icon}</Box>
                </Link>
              );
            })}
          </Box>
          <Box className={iconsBox}>
            <Link
              href="http://maps.google.com/maps?q=210+Louise+Ave,+Nashville,+TN+37203"
              target={"_blank"}
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography className={Typo}>
                <NearMeIcon /> GET DIRECTION
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box className={SectionContainer}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Send Us A Message
          </Typography>
        </Box>
        <Box className={formBox}>
          <FormControl fullWidth>
            <Typography>Name *</Typography>
            <TextField name="name" fullWidth size="small" />
          </FormControl>
          <FormControl fullWidth>
            <Typography>Email *</Typography>
            <TextField name="name" fullWidth size="small" />
          </FormControl>
          <FormControl fullWidth>
            <Typography>Message *</Typography>
            <TextField
              name="name"
              fullWidth
              size="small"
              multiline
              minRows={5}
            />
          </FormControl>
          <Box>
            <Button variant="contained">SUBMIT</Button>
          </Box>
        </Box>
        <Box className={label}></Box>
      </Box>
    </Box>
  );
};

export default ContactUsForm;
