import { FC, lazy, Suspense } from "react";

import { useRoutes, RouteObject, Navigate } from "react-router-dom";

const LazyPage: FC<{ page: () => Promise<{ default: FC }> }> = ({ page }) => {
  const LazyPage = lazy(page);
  return (
    <Suspense>
      <LazyPage />
    </Suspense>
  );
};

const routes: Array<RouteObject> = [
  {
    path: "/login",
    element: <LazyPage page={() => import("./pages/Login")} />,
  },
  {
    path: "/messages",
    element: <LazyPage page={() => import("./pages/Messages")} />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
];

export const Routes = () => {
  return useRoutes(routes);
};
