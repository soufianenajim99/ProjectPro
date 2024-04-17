import React from "react";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { LayoutDashboard, Fingerprint, Bell, LogOut } from "lucide-react";
import { AreaChart } from "lucide-react";
import { UsersRound } from "lucide-react";
import { SidebarUser } from "@/components/ui/SidebarUser";
import NavbarUser from "@/components/ui/NavbarUser";
import { SideBarAdmin } from "@/components/ui/SideBarAdmin";
import { useStateContext } from "@/contexts/contextproviderg";

const AdminLayout = () => {
  const { user, token, setUser, setToken } = useStateContext();

  console.log("Admin layout");

  return (
    <div className="w-full h-screen bg-teal-200/[.3]">
      <NavbarUser />
      <SideBarAdmin />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
