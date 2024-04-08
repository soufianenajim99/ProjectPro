import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";

import HomePage from "./pages/Homepage";
import LoginPage from "./pages/Loginpage";
import MainLayout from "./layouts/MainLayout";
import Registerpage from "./pages/Registerpage";
import AdminLayout from "./layouts/AdminLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AdminLayout />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route index element={<HomePage />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
