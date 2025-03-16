import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/HomePage";
import RootLayout from "@components/layouts/RootLayout";
import BlogPage from "@pages/BlogPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
    ],
  },
]);

export default router;
