import { AnyAction } from "redux";
import { persistStore, persistReducer, Storage } from "redux-persist";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["productCatalog"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunkMiddleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useThunkDispatch = (): ThunkDispatch<{}, {}, AnyAction> =>
  useDispatch<ThunkDispatch<{}, {}, AnyAction>>();

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface IThunkApi {
  dispatch: AppDispatch;
  state: RootState;
}
