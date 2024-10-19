import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slice/authSlice'
import interfaceSlice from "./slice/interfaceSlice";


export const store = configureStore({
  reducer: {
    auth: authSlice,
    interfaceSlice:interfaceSlice
  },
});
