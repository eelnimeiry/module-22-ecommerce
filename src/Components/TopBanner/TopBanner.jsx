import { Box, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router";

const TopBanner = ({ bg, Text, PageName }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "450px",
        width: "100%",
        background: `linear-gradient(rgba(5,5,5, 0.9), rgba(0, 0, 0, 0.7)),url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        color: (theme) => theme.palette.white.main,
        textTransform: "uppercase",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding:'0px 20px',
          alignItems: "start",
        }}
      >
        <Fade duration={1000} direction="up" triggerOnce>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
            }}
          >
            {Text}
          </Typography>
        </Fade>
        <Fade duration={1400} direction="up" triggerOnce>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Typography
              
              sx={{
                transition: "0.5s",
                cursor: "pointer",
                "&:hover": { color: (theme) => theme.palette.primary.main },
              }}
              onClick={() => navigate("/")}
            >
              Home
            </Typography>
            <Typography >/</Typography>
            <Typography >{PageName}</Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default TopBanner;
