import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import aboutusmeeting from "../../../Assets/aboutusmeeting.jpg";
import CountUp from "react-countup";
import AddIcon from "@mui/icons-material/Add";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      
      background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${aboutusmeeting})`,
      minHeight: "55vh",
      height: "100%",
      backgroundOrigin: "border-box",
      backgroundPosition: "top center",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      alignItems: "end",
      justifyContent: "center",
      padding: "50px 0px 0px 0px",
      color: theme.palette.grey[500],
      [theme.breakpoints.down('md')]:{
        backgroundAttachment:'scroll',
        backgroundPosition:'center',
      }
    },
    subContainer: {
      width: "100%",
      maxWidth: "1440px",
      padding: "20px",
      background: theme.palette.white.main,
      display: "flex",
      justifyContent: "space-evenly",
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    card: {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      gap: "10px",
      padding:'20px'
    },
  };
});

const StoreInfo = () => {
  const { container, subContainer, card } = useStyle();
  const [cardData] = useState([
    {
      title: "FOUNDED",
      count: 1982,
      isGreaterthen: false,
    },
    {
      title: "EMPLOYEE",
      count: 400,
      isGreaterthen: true,
    },
    {
      title: "PRODUCTS",
      count: 1000,
      isGreaterthen: true,
    },
    {
      title: "STORES",
      count: 5,
      isGreaterthen: false,
    },
  ]);
  return (
    <Box className={container}>
      <Box className={subContainer}>
        {cardData?.map((data, i) => {
          return (
            <Box key={i} className={card}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  <CountUp end={data?.count} duration={0.5} />
                </Typography>
                {data?.isGreaterthen ? (
                  <Box>
                    <AddIcon sx={{ fontSize: "35px" }} />
                  </Box>
                ) : null}
              </Box>
              <Typography sx={{ fontWeight: "bold" }}>{data?.title}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default StoreInfo;
