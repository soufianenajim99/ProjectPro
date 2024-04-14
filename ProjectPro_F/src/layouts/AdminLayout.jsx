import React from "react";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar, { SidebarItem } from "@/components/ui/SideBarAdmin";
import { LayoutDashboard, Fingerprint, Bell, LogOut } from "lucide-react";
import { AreaChart } from "lucide-react";
import { UsersRound } from "lucide-react";
import NavbarAdmin from "@/components/ui/NavbarAdmin";

const AdminLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="row-span-5">
          {" "}
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
        </div>
        <div className="col-span-4">
          <NavbarAdmin />
        </div>
        <div className="col-span-4 row-span-4 col-start-2 row-start-2">
          Dashboard
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default AdminLayout;
