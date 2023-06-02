import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserTokenData, UserTokenStructure } from "../../types";

const initialState: UserTokenData = {
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
    logoutUser: (): UserTokenData => ({
      ...initialState,
    }),
  },
});

export const {
  logoutUser: logoutUserActionCreator,
  loginUser: loginUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;