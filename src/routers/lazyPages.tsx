import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyListPage = lazy(() => import("../pages/ListPage/ListPage"));
