import React from "react";
import Navbar from "@/components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import { SideBarAdmin } from "@/components/ui/SideBarAdmin";
import { useStateContext } from "@/contexts/contextproviderg";
import NavbarAdmin from "@/components/ui/NavbarAdmin";

const AdminLayout = () => {
  const { user, token, setUser, setToken } = useStateContext();
  // console.log(user);
  if (!token) {
    return <Navigate to="/" />;
  }
  console.log("Admin layout");

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">
      <NavbarAdmin />
      <div className="flex">
        <SideBarAdmin />
        <div className=" mt-2 ml-2 flex-grow">
          <Outlet className="" />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
