import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CallIcon from "@mui/icons-material/Call";
const useStyle = makeStyles((theme) => {
  return {
    addressContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      padding: "20px 0px",
      [theme.breakpoints.down('md')]:{
        flexWrap:'wrap'
      }
    
    },
    AddressBox: {
   
      width:'100%',
      display: "flex",
      gap: "10px",
      padding: "10px 10px",
      boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    },
  };
});

const ContactAddress = () => {
  const { addressContainer, AddressBox } = useStyle();
  return (
    <Box className={addressContainer}>
      <Box className={AddressBox}>
        <Box>
          <CallIcon color="primary" sx={{ fontSize: "35px" }} />
        </Box>
        <Box>
          <Typography color={"primary"}>Call Us</Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            +1 123 456 7890
          </Typography>
        </Box>
      </Box>
      <Box className={AddressBox}>
        <Box>
          <SupportAgentIcon color="primary" sx={{ fontSize: "35px" }} />
        </Box>
        <Box>
          <Typography color={"primary"}>SUPPORT</Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            support@email.com
          </Typography>
        </Box>
      </Box>
      <Box className={AddressBox}>
        <Box>
          <LocalOfferIcon color="primary" sx={{ fontSize: "35px" }} />
        </Box>
        <Box>
          <Typography color={"primary"}>SALES</Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            sales@email.com
          </Typography>
        </Box>
      </Box>
      <Box className={AddressBox}>
        <Box>
          <SendAndArchiveIcon color="primary" sx={{ fontSize: "35px" }} />
        </Box>
        <Box>
          <Typography color={"primary"}>COMPLAINTS</Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            complaints@email.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactAddress;
