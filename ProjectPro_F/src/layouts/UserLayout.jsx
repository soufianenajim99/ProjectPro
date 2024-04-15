import React from "react";
import NavbarUser from "@/components/ui/NavbarUser";
import { Outlet } from "react-router-dom";
import { SidebarWithContentSeparator } from "@/components/ui/SidebarWithContentSeparator";

const UserLayout = () => {
  return (
    <div className="w-full h-screen bg-teal-200/[.3]">
      <NavbarUser />
      <SidebarWithContentSeparator />
      <Outlet />
    </div>
  );
};

export default UserLayout;
