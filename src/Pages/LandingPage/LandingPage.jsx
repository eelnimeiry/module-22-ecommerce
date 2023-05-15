import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import FeaturesProducts from "../../Components/LandingPage/FeaturesProducts/FeaturesProducts";
import HeroSection from "../../Components/LandingPage/HeroSection/HeroSection";


const useStyle = makeStyles((theme) => {
  return {
    container: {},
    LandingSection: {
      display: "flex",
      flexDirection: "column",
      gap: "60px",
    },
  };
});

const LandingPage = () => {
  const { container, LandingSection } = useStyle();

  return (
    <Box className={container}>
      <Box className={LandingSection}>
        <Box>
          <HeroSection />
        </Box>
        <Box>
          <FeaturesProducts />
        </Box>
        
      </Box>
    </Box>
  );
};

export default LandingPage;
