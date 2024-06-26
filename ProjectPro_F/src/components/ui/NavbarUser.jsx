import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "./SearchIcon.jsx";
import { useStateContext } from "@/contexts/contextproviderg.jsx";
import axiosClient from "@/axiosClient.js";
import { ListItem } from "@material-tailwind/react";

const NavbarUser = () => {
  const { user, token, setUser, setToken } = useStateContext();
  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.get("/logout").then(({}) => {
      setUser(null);
      setToken(null);
    });
  };

  // console.log(user);
  return (
    <Navbar isBordered maxWidth="full" className=" " shouldHideOnScroll>
      <NavbarContent justify="start">
        <NavbarItem className="mr-4">
          <Link className="nav-link" color="foreground" to="/">
            ProjectPro
          </Link>
        </NavbarItem>
        <NavbarContent className="hidden sm:flex gap-3"></NavbarContent>
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
            {/* <Link to="/user/dashboard/profile"> */}
            {/* <ListItem>profile</ListItem> */}
            {/* </Link> */}
            <DropdownItem key="analytics">
              <Link to="/user/dashboard">Analytics</Link>
            </DropdownItem>
            <DropdownItem key="projects">
              <Link to="/user/dashboard/projects_list">Projects</Link>
            </DropdownItem>
            <DropdownItem key="my-projects">
              {" "}
              <Link to="/user/dashboard/projects">My-Projects</Link>
            </DropdownItem>

            <DropdownItem key="profile">
              <Link to="/user/dashboard/profile">Profile</Link>
            </DropdownItem>
            <DropdownItem key="Inbox">
              <Link to="/user/dashboard/inbox">Inbox</Link>
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

export default NavbarUser;
