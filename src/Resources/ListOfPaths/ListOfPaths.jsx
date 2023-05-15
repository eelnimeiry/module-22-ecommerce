

import Checkout from "../../Pages/Checkout/Checkout";

import LandingPage from "../../Pages/LandingPage/LandingPage";
import MainPage from "../../Pages/MainPage/MainPage";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import Products from "../../Pages/Products/Products";


export const Paths = [
  {
    path: "/",
    component: <MainPage ActivePage={<LandingPage />} />,
  },
  {
    path: "/products",
    component: <MainPage ActivePage={<Products />} />,
  },
  {
    path: "/products/:id",
    component: <MainPage ActivePage={<ProductDetails />} />,
  },
 
  {
    path: "/checkout",
    component: <MainPage ActivePage={<Checkout />} />,
  },
  
];
