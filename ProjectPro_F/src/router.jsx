import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import GuestLayout from "./layouts/GuestLayout";
import LoginPage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import HomePage from "./pages/Homepage";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserLayout from "./layouts/UserLayout";
import UserDashboard from "./pages/user/UserDashboard";
import UserProjects from "./pages/user/UserProjects";
import UserInbox from "./pages/user/UserInbox";
import AdminProjects from "./pages/admin/AdminProjects";
import AdminUsers from "./pages/admin/AdminUsers";
import UserProfile from "./pages/user/UserProfile";
import AdminProfile from "./pages/admin/AdminProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/projects",
        element: <AdminProjects />,
      },
      {
        path: "/admin/users",
        element: <AdminUsers />,
      },
      {
        path: "/admin/profile",
        element: <AdminProfile />,
      },
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/user/dashboard",
        element: <UserDashboard />,
      },
      {
        path: "/user/dashboard/projects",
        element: <UserProjects />,
      },
      {
        path: "/user/dashboard/inbox",
        element: <UserInbox />,
      },
      {
        path: "/user/dashboard/profile",
        element: <UserProfile />,
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
