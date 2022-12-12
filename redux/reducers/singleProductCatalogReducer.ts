import { createSlice } from "@reduxjs/toolkit";
import { singleProductCatalogGetAll } from "../services/products";
import { WPShopCatalogList } from "../types/WPShopCatalogList";

interface ProductState {
  data: WPShopCatalogList[];
  isLoading: boolean;
  isSuccess: boolean;
}

const initialState: ProductState = {
  data: [] as WPShopCatalogList[],
  isLoading: false,
  isSuccess: false,
};

const singleProductCatalogReducer = createSlice({
  name: "singleProductCatalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(singleProductCatalogGetAll.pending, (state, action) => {
      state.isLoading = true;
      state.data = [] as WPShopCatalogList[];
    });
    builder.addCase(singleProductCatalogGetAll.fulfilled, (state, action) => {
      state.data = action.payload as WPShopCatalogList[];
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(singleProductCatalogGetAll.rejected, (state) => {
      state.isLoading = false;
      state.data = [] as WPShopCatalogList[];
    });
  },
});

export default singleProductCatalogReducer.reducer;
