import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";

import { Link } from "react-router-dom";
import { useStateContext } from "@/contexts/contextproviderg";
import axiosClient from "@/axiosClient";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, token, setUser, setToken } = useStateContext();
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.get("/logout").then(({}) => {
      setUser(null);
      setToken(null);
    });
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">
            <Link to="/" className="nav-link">
              ProjectPro
            </Link>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {token ? (
          user.role == "admin" ? (
            <NavbarItem>
              <Link
                className="nav-link"
                color="foreground"
                to="/admin/dashboard"
              >
                Dashboard_Admin
              </Link>
            </NavbarItem>
          ) : (
            <NavbarItem>
              <Link
                className="nav-link"
                color="foreground"
                to="/user/dashboard"
              >
                Dashboard
              </Link>
            </NavbarItem>
          )
        ) : (
          <NavbarItem>
            <Link className="nav-link" color="foreground">
              Contact
            </Link>
          </NavbarItem>
        )}

        <NavbarItem isActive>
          <Link aria-current="page">Customers</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground">Integrations</Link>
        </NavbarItem>
      </NavbarContent>
      {token ? (
        <NavbarContent justify="end">
          <NavbarItem>
            <span className=" mx-5">welcome {user.username}</span>
            <Button as={Link} color="danger" onClick={onLogout}>
              Logout
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" variant="flat">
              <Link to="/register">Register</Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
