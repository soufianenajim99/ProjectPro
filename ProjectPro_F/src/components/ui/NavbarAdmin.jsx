import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";
import { Link } from "react-router-dom";
import axiosClient from "@/axiosClient.js";
import { useStateContext } from "@/contexts/contextproviderg.jsx";

const NavbarAdmin = () => {
  const { user, token, setUser, setToken } = useStateContext();
  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.get("/logout").then(({}) => {
      setUser(null);
      setToken(null);
    });
  };
  return (
    <Navbar isBordered maxWidth="full" className=" ">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <Link to="/" className="nav-link">
            ProjectPro
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          {/* <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem> */}
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={`http://127.0.0.1:8000/storage/images/profile/${user.picture}`}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{`${user.email}`}</p>
            </DropdownItem>

            <DropdownItem key="logout" color="danger" onClick={onLogout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarAdmin;
