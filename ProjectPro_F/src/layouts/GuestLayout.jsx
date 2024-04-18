import { useStateContext } from "../contexts/contextproviderg";
import Navbar from "@/components/Navbar";

import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function GuestLayout() {
  const location = useLocation();
  const loginPaths = ["/login", "/register"];
  const isLoginPath = loginPaths.some((path) =>
    location.pathname.startsWith(path)
  );

  const { user, token, setUser, setToken } = useStateContext();
  console.log("guest layout");
  if (token) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      {/* <div>Layout</div> */}
      {!isLoginPath && <Navbar />}

      <Outlet />
    </div>
  );
}
