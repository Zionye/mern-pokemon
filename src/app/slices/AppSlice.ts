import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/types";

// 创建初始状态
const initialState: AppTypeInitialState = {
  toasts: [],
  userInfo: undefined,
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
    setUserStatus: (state, actions)=>{
      state.userInfo = actions.payload;
    },
  }
});

export const { 
  setToast, 
  clearToasts,
  setUserStatus,
} = AppSlice.actions;
