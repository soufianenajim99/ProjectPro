import React from "react";
import Navbar from "@/components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { LayoutDashboard, Fingerprint, Bell, LogOut } from "lucide-react";
import { AreaChart } from "lucide-react";
import { UsersRound } from "lucide-react";
import { SidebarUser } from "@/components/ui/SidebarUser";
import NavbarUser from "@/components/ui/NavbarUser";
import { SideBarAdmin } from "@/components/ui/SideBarAdmin";
import { useStateContext } from "@/contexts/contextproviderg";

const AdminLayout = () => {
  const { user, token, setUser, setToken } = useStateContext();
  // console.log(user);
  if (!token) {
    return <Navigate to="/" />;
  }
  console.log("Admin layout");

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">
      <NavbarUser />
      <div className="flex">
        <SideBarAdmin />
        <div className=" mt-2 ml-2">
          <Outlet className="flex-grow" />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
