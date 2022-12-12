import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import mainCatalogReducer from "./mainCatalogReducer";
import productCatalogReducer from "./productCatalogReducer";
import singleProductCatalogReducer from "./singleProductCatalogReducer";
import subCatalogReducer from "./subCatalogReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  subCatalog: subCatalogReducer,
  mainCatalog: mainCatalogReducer,
  productCatalog: productCatalogReducer,
  singleProductCatalog: singleProductCatalogReducer,
});

export default rootReducer;
