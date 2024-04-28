import React, { useEffect } from "react";
import NavbarUser from "@/components/ui/NavbarUser";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { SidebarUser } from "@/components/ui/SidebarUser";
import { useStateContext } from "@/contexts/contextproviderg";
import axiosClient from "@/axiosClient";

const UserLayout = () => {
  const location = useLocation();
  const { user, token, setUser, setToken } = useStateContext();
  useEffect(() => {
    axiosClient.get("/authuser").then(({ data }) => {
      setUser(data.user);
    });
  }, []);
  if (!token) {
    return <Navigate to="/" />;
  }
  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col">
      <NavbarUser />
      <div className="flex">
        {!location.pathname.startsWith("/user/projectpage") && <SidebarUser />}

        <div className="mt-2 ml-2  flex-grow">
          <Outlet className="" />
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
