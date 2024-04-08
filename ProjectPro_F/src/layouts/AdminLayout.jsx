import React from "react";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar, { SidebarItem } from "@/components/ui/SideBarAdmin";
import { LayoutDashboard } from "lucide-react";
const AdminLayout = () => {
  return (
    <div>
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text={"Dashboard"}
          active
        />
        <SidebarItem icon={<LayoutDashboard size={20} />} text={"hell"} />
        <SidebarItem icon={<LayoutDashboard size={20} />} text={"ad"} />
        <SidebarItem icon={<LayoutDashboard size={20} />} text={"gd"} />
        <SidebarItem icon={<LayoutDashboard size={20} />} text={"g"} />
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text={"Dashgaboard"}
        />
      </Sidebar>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
