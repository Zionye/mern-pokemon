import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/types";

// 创建初始状态
const initialState: AppTypeInitialState = {};

// 创建切片
export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {}
});

export const {} = AppSlice.actions;
