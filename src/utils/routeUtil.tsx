import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Batch = lazy(() => import("src/routes/batch"));
const Live = lazy(() => import("src/routes/live"));

/** - page route name */
export const routeName = {
  batch: "/",
  live: "/live",
};

/** - browser router */
export const router = createBrowserRouter([
  { path: routeName.batch, element: <Batch /> },
  { path: routeName.live, element: <Live /> }
]);
