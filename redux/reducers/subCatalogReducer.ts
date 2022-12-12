import { createSlice } from "@reduxjs/toolkit";
import { subCatalogGetAll } from "../services/products";
import { WPShopCatalog } from "../types/WPShopCatalog";

interface ProductState {
  data: WPShopCatalog[];
  isLoading: boolean;
}

const initialState: ProductState = {
  data: [] as WPShopCatalog[],
  isLoading: false,
};

const subCatalogReducer = createSlice({
  name: "subCatalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(subCatalogGetAll.pending, (state, action) => {
      state.isLoading = true;
      state.data = [] as WPShopCatalog[];
    });
    builder.addCase(subCatalogGetAll.fulfilled, (state, action) => {
      state.data = action.payload as WPShopCatalog[];
      state.isLoading = false;
    });
    builder.addCase(subCatalogGetAll.rejected, (state) => {
      state.isLoading = false;
      state.data = [] as WPShopCatalog[];
    });
  },
});

export default subCatalogReducer.reducer;
