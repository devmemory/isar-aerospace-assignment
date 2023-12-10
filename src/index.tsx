import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import { router } from "./utils/routeUtil";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <GlobalStyles />
      <Suspense fallback={<div />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
