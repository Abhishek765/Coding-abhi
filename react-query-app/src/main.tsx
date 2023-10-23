import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./components/Product.tsx";
import Products from "./components/Products.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:productId",
    element: <Product />,
  },
]);

// Create a client -> we can add options globally -> NOTE: we can override these parameters in nested components
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000, // for next 10 seconds (after the first fetch) the data will be cached (no new request), after 10s the data will be state then it will refetch the data again
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* //! Provide the client to your App */}
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
