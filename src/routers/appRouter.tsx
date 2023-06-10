import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import paths from "./paths/paths";
import { Suspense } from "react";
import { LazyErrorPage, LazyListPage, LazyLoginPage } from "./lazyPages";
import AddPage from "../pages/AddPage/AddPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to={"/user/login"} replace /> },
      {
        path: paths.login,
        element: (
          <Suspense>
            <LazyLoginPage />
          </Suspense>
        ),
      },
      {
        path: paths.home,
        element: (
          <Suspense>
            <LazyListPage />
          </Suspense>
        ),
      },
      {
        path: paths.error,
        element: (
          <Suspense>
            <LazyErrorPage />
          </Suspense>
        ),
      },
      {
        path: paths.add,
        element: (
          <Suspense>
            <AddPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
