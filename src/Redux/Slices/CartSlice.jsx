import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  status: "idle", //pending,success,failure
};

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let found = false;
      let value = state?.cart?.filter((data) => {
        if (data?.id === action.payload?.id) {
          data.totalPrice += +action.payload?.totalPrice;
          data.quantity += (+action.payload?.quantity);
          found = true;
        }
        return data;
      });
      if (found) {
        state.cart = value;
      } else if (!found) {
        console.log("not found");
        state.cart = [...state.cart, action.payload];
      }
    },
    setcartvalues:(state,action)=>{
      state.cart = action.payload
    },
    removeFromCart: (state, action) => {
      state.cart = state?.cart?.filter((data)=>data?.id!==action.payload)

      console.log(action.payload);
    },
  },
});
export const getCartValues = (state) => state.CartSlice;
export const { addToCart, removeFromCart, setcartvalues } = CartSlice.actions;
export default CartSlice.reducer;
