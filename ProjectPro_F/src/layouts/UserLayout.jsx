import React from "react";
import NavbarUser from "@/components/ui/NavbarUser";
import { Navigate, Outlet } from "react-router-dom";
import { SidebarUser } from "@/components/ui/SidebarUser";
import { useStateContext } from "@/contexts/contextproviderg";

const UserLayout = () => {
  const { user, token, setUser, setToken } = useStateContext();

  if (!token) {
    return <Navigate to="/" />;
  }
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">
      <NavbarUser />
      <div className="flex">
        <SidebarUser />
        <div className="mt-2 ml-2  flex-grow">
          <Outlet className="" />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
