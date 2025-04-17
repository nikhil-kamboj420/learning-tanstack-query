import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { MainLayout } from "./components/Layout/MainLayout";
import { Home } from "./Pages/Home";
import { FetchOld } from "./pages/FetchOld";
import { FetchRQ } from "./pages/FetchRQ";


// Create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      // {
      //   path: "/rq/:id",
      //   element: <FetchIndv />,
      // },
      // {
      //   path: "/infinite",
      //   element: <InfiniteScroll />,
      // },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;