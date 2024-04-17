import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import GuestLayout from "./layouts/GuestLayout";
import LoginPage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import HomePage from "./pages/Homepage";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/dashboard",
        element: <AdminDashboard />,
      },
    ],
  },

  {
    path: "/",
    element: <GuestLayout />,
    children: [
      //   {
      //     path: "/home",
      //     element: <HomePage />,
      //   },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <Registerpage />,
      },
    ],
  },
]);

export default router;
