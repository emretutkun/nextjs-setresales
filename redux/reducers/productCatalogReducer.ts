import { createSlice } from "@reduxjs/toolkit";
import { productCatalogGetAll } from "../services/products";
import { WPShopDto } from "../types/WPShopDto";

interface ProductState {
  data: WPShopDto[];
  isLoading: boolean;
  isSuccess: boolean;
}

const initialState: ProductState = {
  data: [] as WPShopDto[],
  isLoading: false,
  isSuccess: false,
};

const productCatalogReducer = createSlice({
  name: "productCatalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productCatalogGetAll.pending, (state, action) => {
      state.isLoading = true;
      state.data = [] as WPShopDto[];
    });
    builder.addCase(productCatalogGetAll.fulfilled, (state, action) => {
      state.data = action.payload as WPShopDto[];
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(productCatalogGetAll.rejected, (state) => {
      state.isLoading = false;
      state.data = [] as WPShopDto[];
    });
  },
});

export default productCatalogReducer.reducer;
