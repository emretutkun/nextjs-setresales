import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WPShopDto } from "../types/WPShopDto";

interface CartState {
  product: WPShopDto;
  qty: number;
}

const initialState = [] as CartState[];

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.product.id === action.payload);
      if (item?.qty) {
        item.qty++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.product.id === action.payload);
      if (item?.qty === 1) {
        removeItem(item.product.id);
      } else {
        if (item?.qty) {
          item.qty--;
        }
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.filter(
        (item) => item.product.id !== action.payload
      );
      return removeItem;
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartReducer.actions;

export default cartReducer.reducer;
