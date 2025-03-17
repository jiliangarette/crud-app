import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/HomePage";
import RootLayout from "@components/layouts/RootLayout";
import BlogPage from "@pages/BlogPage";
import LoginPage from "@/pages/auth/LoginPage";

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
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

export default router;
