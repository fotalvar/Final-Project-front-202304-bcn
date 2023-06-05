import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import useToken from "../../hooks/token/useToken";
import useLocalStorage from "../../hooks/localStorage/useLocalStorage";
import { useAppDispatch } from "../../store";
import { loginUserActionCreator } from "../../store/user/userSlice";

const App = (): React.ReactElement => {
  const { getItemLocalStorage } = useLocalStorage();
  const { getTokenData } = useToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = getItemLocalStorage("token");

    if (token) {
      const userData = getTokenData(token);

      dispatch(loginUserActionCreator({ ...userData, token: token }));
    }
  }, [dispatch, getItemLocalStorage, getTokenData]);
  return (
    <>
      <Layout />
    </>
  );
};

export default App;
