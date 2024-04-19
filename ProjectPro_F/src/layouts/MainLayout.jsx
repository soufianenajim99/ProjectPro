import Navbar from "@/components/Navbar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "@/contexts/contextproviderg";
import { useEffect } from "react";
import axiosClient from "@/axiosClient";

const MainLayout = () => {
  const location = useLocation();
  const loginPaths = ["/login", "/register"];
  const isLoginPath = loginPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const { user, token, setUser, setToken } = useStateContext();
  // if (!token) {
  //   return <Navigate to="/login" />;
  // }
  console.log(user);
  // console.log(user);
  // console.log("main layout");

  useEffect(() => {
    axiosClient.get("/authuser").then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  return (
    <div>
      {!isLoginPath && <Navbar />}
      <Outlet />
    </div>
  );
};

export default MainLayout;
