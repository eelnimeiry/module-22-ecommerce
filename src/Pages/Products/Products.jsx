import {
  Box,
  Button,
  FormControl,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

import products from "../../Assets/products.jpg";
import TopBanner from "../../Components/TopBanner/TopBanner";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { ProductData } from "../../Resources/ProductData/ProductData";
import ProductCards from "../../Components/Cards/ProductCards";
import ProductDetailsModal from "../../Components/Modals/ProductDetailsModal";
import FilterDrawer from "../../Components/FilterDrawer/FilterDrawer";
import { useEffect } from "react";
const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",

      alignItems: "center",
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      maxWidth: "1440px",
      gap: "50px",
      padding: "40px 20px",
      alignItems: "center",
      background: theme.palette.background.secondary,
    },
    filterContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "10px",
    },
    contentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-evenly",
      },
    },
  };
});

const Products = () => {
  const { container, subContainer, filterContainer, contentContainer } =
    useStyle();
  const [allProducts, setallProducts] = useState(ProductData);

  const [selectedProduct, setselectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpen = (data) => {
    console.log(data);
    setselectedProduct(data);
    setOpen(true);
  };

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  return (
    <Box>
      <TopBanner bg={products} Text={"Products"} PageName={"Products"} />
      <Box className={container}>
        <Box className={subContainer}>
          <Box className={filterContainer}>
            <Box>
              <Button
                variant="contained"
                sx={{ padding: "5px 20px" }}
                onClick={handleOpenFilter}
              >
                <MenuOpenIcon /> OPTIONS
              </Button>
            </Box>
            <Box sx={{ width: "100%", maxWidth: "220px" }}>
              <FormControl fullWidth>
                <TextField
                  name="filter"
                  size="small"
                  select
                  // onChange={handleChange}
                >
                  <MenuItem value="Default sort">Default sort</MenuItem>
                  <MenuItem value="increment">
                    Filter By Price (Inc)
                  </MenuItem>
                  <MenuItem value="decrement">
                    Filter By Price (Dec)
                  </MenuItem>
                </TextField>
              </FormControl>
            </Box>
          </Box>
          <Box className={contentContainer}>
            {allProducts?.map((data, i) => {
              return (
                <ProductCards key={i} data={data} handleOpen={handleOpen} />
              );
            })}
          </Box>
        </Box>
      </Box>
      {open && selectedProduct ? (
        <ProductDetailsModal
          open={open}
          setOpen={setOpen}
          selectedProduct={selectedProduct}
          setselectedProduct={setselectedProduct}
        />
      ) : null}
      {openFilter ? (
        <FilterDrawer openFilter={openFilter} setOpenFilter={setOpenFilter} />
      ) : null}
    </Box>
  );
};

export default Products;
