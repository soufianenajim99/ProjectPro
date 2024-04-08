import React from "react";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar, { SidebarItem } from "@/components/ui/SideBarAdmin";
import { LayoutDashboard, Fingerprint, Bell, LogOut } from "lucide-react";
import { AreaChart } from "lucide-react";
import { UsersRound } from "lucide-react";

const AdminLayout = () => {
  return (
    <div>
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text={"Dashboard"}
          active
        />
        <SidebarItem icon={<AreaChart size={20} />} text={"Statistics"} />
        <SidebarItem icon={<UsersRound size={20} />} text={"Users"} />
        <SidebarItem icon={<Fingerprint size={20} />} text={"Profile"} />
        <SidebarItem icon={<Bell size={20} />} text={"Notifications"} />
        <SidebarItem icon={<LogOut size={20} />} text={"Log-out"} />
      </Sidebar>

      <Outlet />
    </div>
  );
};

export default AdminLayout;
