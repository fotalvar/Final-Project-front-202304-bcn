import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import paths from "./paths/paths";
import { Suspense } from "react";
import { LazyLoginPages } from "./lazyPages";

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
            <LazyLoginPages />
          </Suspense>
        ),
      },
      { path: paths.home },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
