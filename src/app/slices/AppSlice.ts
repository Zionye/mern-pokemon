import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/types";
import { pokemonTabs } from "../../utils/constants";

// 创建初始状态
const initialState: AppTypeInitialState = {
  toasts: [],
  userInfo: undefined,
  currentPokemonTab: pokemonTabs.description,
};

// 创建切片
export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setToast: (state, action) => {
      const toasts = [...state.toasts];
      toasts.push(action.payload);
      state.toasts = toasts;
    },
    clearToasts: (state) => {
      state.toasts = [];
    },
    setUserStatus: (state, action)=>{
      state.userInfo = action.payload;
    },
    setPokemonTab: (state, action)=>{
      state.currentPokemonTab = action.payload;
    },
  }
});

export const { 
  setToast, 
  clearToasts,
  setUserStatus,
  setPokemonTab,
} = AppSlice.actions;
