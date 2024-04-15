import React from "react";
import NavbarUser from "@/components/ui/NavbarUser";
import { Outlet } from "react-router-dom";
import { SidebarUser } from "@/components/ui/SidebarUser";

const UserLayout = () => {
  return (
    <div className="w-full h-screen bg-teal-200/[.3]">
      <NavbarUser />
      <SidebarUser />
      <Outlet />
    </div>
  );
};

export default UserLayout;
