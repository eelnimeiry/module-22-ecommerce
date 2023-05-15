import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

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
      gap: "20px",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    content: {
      width: "100%",
    },
  };
});

const DescriptionContainer = () => {
  const { container, subContainer, contentContainer, content } = useStyle();
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box>
          <Typography sx={{ fontWeight: "bold" }}>
            Faucibus etiam lacus sollicitudin sed amet, sit vitae lorem ornare
            egestas nisi, diam cursus non mattis etiam sodales vestibulum arcu
            a, aliquam at leo condimentum etiam dui eget arcu nunc, vivamus vel
            facilisi auctor aliquet eu mollis accumsan fermentum ipsum ornare
            viverra proin eleifend ultricies est, aliquet felis vivamus
            praesent.
          </Typography>
        </Box>
        <Box className={contentContainer}>
          <Box className={content}>
            <Typography>
              Sit ipsum elit nisl commodo cursus diam massa nunc, commodo amet,
              viverra lobortis aliquam leo vitae in dictum sagittis, dui est
              pellentesque non est nunc aliquet magna malesuada diam nunc quis
              duis id nunc id ultrices cursus lorem consequat tincidunt
              pharetra, risus quam facilisis lectus ipsum ut mattis pretium eros
              tincidunt neque.
            </Typography>
          </Box>
          <Box className={content}>
            <Typography>
              Aliquet magna malesuada diam nunc quis duis id nunc id ultrices
              cursus lorem consequat tincidunt pharetra, risus quam facilisis
              lectus ipsum ut mattis pretium eros tincidunt neque, faucibus
              volutpat accumsan pretium arcu in donec et, rhoncus in sed
              eleifend odio gravida vitae quam donec faucibus molestie bibendum.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DescriptionContainer;
