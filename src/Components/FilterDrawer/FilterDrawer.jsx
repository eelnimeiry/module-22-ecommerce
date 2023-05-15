import {
  Box,
  Button,
  FormControl,
  Slider,
  SwipeableDrawer,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      width: "300px",
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      alignItems: "center",
      padding: "50px 20px",
      color: theme.palette.grey[600],
    },
    fieldContainer: {
      width: "100%",
      display: "flex",
      gap: "10px",
      justifyContent: "space-between",
      alignItems: "center",
      [theme.breakpoints.down('sm')]:{
        flexWrap:'wrap'
      }
    },
    priceFilterContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      textAlign: "left",
    },
    FilterButtonContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
      [theme.breakpoints.down('md')]:{
        flexDirection:'column-reverse',
        alignItems:'start'
      }
    },
    CategoryContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "10px",
    },
    categoriesBox: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "10px",
    },
    Typo:{
        transition:'0.5s',
        cursor:'pointer',
        "&:hover":{
            color:theme.palette.primary.main
        }
    }
  };
});

const FilterDrawer = ({ openFilter, setOpenFilter }) => {
  const {
    container,
    fieldContainer,
    priceFilterContainer,
    FilterButtonContainer,
    CategoryContainer,
    categoriesBox,
    Typo,
  } = useStyle();
  const [value, setValue] = React.useState([120, 14450]);
  const [categories] = useState([
    {
      title: "Bathroom",
      products: "4",
    },
    {
      title: "Bedroom",
      products: "4",
    },
    {
      title: "Cabinet",
      products: "1",
    },
    {
      title: "Cabinet",
      products: "1",
    },
    {
      title: "Chair",
      products: "1",
    },
    {
      title: "Chair",
      products: "1",
    },
    {
      title: "Home Office",
      products: "4",
    },
    {
      title: "Kitchen",
      products: "4",
    },
    {
      title: "Living Room",
      products: "5",
    },
    {
      title: "Sofa",
      products: "1",
    },
  ]);
  const handleClose = () => {
    setOpenFilter(false);
  };
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  return (
    <SwipeableDrawer anchor="left" open={openFilter} onClose={handleClose}>
      <Box className={container}>
        <Box className={fieldContainer}>
          <FormControl fullWidth>
            <TextField
              fullWidth
              name="product"
              size="small"
              placeholder="Search Product"
            />
          </FormControl>
          <Box>
            <Button variant="contained" sx={{ padding: "6px 30px" }}>
              SEARCH
            </Button>
          </Box>
        </Box>
        <Box className={priceFilterContainer}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Filter By Price
            </Typography>
          </Box>
          <Box sx={{ width: "95%", margin: "0px auto" }}>
            <Slider
              min={120}
              max={14500.5}
              value={value}
              onChange={handleChange}
              // valueLabelDisplay="auto"
            />
          </Box>
          <Box className={FilterButtonContainer}>
            <Box>
              <Button variant="contained" sx={{ padding: "6px 30px" }}>
                FILTER
              </Button>
            </Box>
            <Box>
              <Typography>
                Price:{" "}
                <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                  $ {value[0]} - $ {value[1]}
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={CategoryContainer}>
          {categories?.map((data, i) => {
            return (
              <Box key={i} className={categoriesBox}>
                <Box className={Typo}>
                  <Typography>{data?.title}</Typography>
                </Box>
                <Box>
                  <Typography>({data?.products})</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default FilterDrawer;
