import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import loginSlice from "../reducres/loginSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  whiteList: ["login"],
};

const rootReducer = combineReducers({
  login: loginSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // redux-persist 사용 시 필수
    }),
});

export default store;
