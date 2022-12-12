import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IThunkApi } from "../..";
import { RootResponse } from "../../types/RootResponse";
import { WPShopCatalog } from "../../types/WPShopCatalog";
import { WPShopCatalogList } from "../../types/WPShopCatalogList";
import { useAppDispatch, useReduxSelector } from "../../redux";
import { WPShopDto } from "../../types/WPShopDto";
import {
  WPShopOrder,
  WPShopOrderCreate,
  WPShopOrderCreateResponse,
} from "../../types/WPShopOrderCreate";

export const subCatalogGetAll = createAsyncThunk<
  WPShopCatalog[],
  void,
  IThunkApi
>("subCatalog/GetAll", async (_, thunkApi) => {
  let data = [] as WPShopCatalog[];
  await axios
    .get<any, AxiosResponse<RootResponse<WPShopCatalog[]>>>(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=avalanche-2"
    )
    .then(async (response) => {
      data = response.data.data;
    })
    .catch((err: AxiosError) => {
      thunkApi.rejectWithValue(err.response?.statusText);
      return false;
    });
  return data;
});








