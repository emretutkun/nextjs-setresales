import { createSlice } from "@reduxjs/toolkit";
import { productGetMainCatalog } from "../services/products";
import { WPShopCatalog } from "../types/WPShopCatalog";

interface ProductState {
  data: WPShopCatalog[];
  isLoading: boolean;
}

const initialState: ProductState = {
  data: [] as WPShopCatalog[],
  isLoading: false,
};

const mainCatalogReducer = createSlice({
  name: "mainCatalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productGetMainCatalog.pending, (state, action) => {
      state.isLoading = true;
      state.data = [] as WPShopCatalog[];
    });
    builder.addCase(productGetMainCatalog.fulfilled, (state, action) => {
      state.data = action.payload as WPShopCatalog[];
      state.isLoading = false;
    });
    builder.addCase(productGetMainCatalog.rejected, (state) => {
      state.isLoading = false;
      state.data = [] as WPShopCatalog[];
    });
  },
});

export default mainCatalogReducer.reducer;
