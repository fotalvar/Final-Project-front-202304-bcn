import { lazy } from "react";

export const LazyLoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));

export const LazyListPage = lazy(() => import("../pages/ListPage/ListPage"));

export const LazyErrorPage = lazy(
  () => import("../pages/NotFoundPage/NotFoundPage")
);

export const LazyAddPage = lazy(() => import("../pages/AddPage/AddPage"));
