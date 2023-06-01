import { lazy } from "react";

export const LazyLoginPages = lazy(
  () => import("../pages/LoginPage/LoginPage")
);
