import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserDataStructure, UserTokenStructure } from "../../types";

const initialState: UserDataStructure = {
  id: "",
  name: "",
  isLogged: false,
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      _currentUserState,
      action: PayloadAction<UserTokenStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (): UserDataStructure => ({
      ...initialState,
    }),
  },
});

export const {
  logoutUser: logoutUserActionCreator,
  loginUser: loginUserActionCreator,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
