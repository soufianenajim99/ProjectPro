import UserProjectTable from "@/components/ui/UserProjectTable";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { Select, SelectItem, Avatar } from "@nextui-org/react";

import axiosClient from "@/axiosClient";
import { useForm } from "react-hook-form";
// import { Link, redirect } from "react-router-dom";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const UserProjects = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    let teamArray = data.team.split(",");
    let teamNumbers = teamArray.map(Number);

    const payload = {
      name: data.name,
      description: data.description,
    };
    axiosClient
      .post("/project/create", payload)
      .then((response) => {
        console.log(teamNumbers);

        teamNumbers.map((userId) => {
          const payload = {
            utilisateur_id: userId,
            project_id: response.data.data.original.project_id,
            role: "developmentteam",
          };

          axiosClient
            .post("/project/addMembers", payload)
            .then((response) => ({
              userId: userId,
              status: "Success",
              data: response.data,
            }))
            .then(handleClick())
            .then(onOpenChange())
            .catch((error) => ({
              userId: userId,
              status: "Failed",
              error: error.response ? error.response.data : "Unknown error",
            }));
        });
        setLoading(!loading);
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
      });
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showUser, setShowPost] = useState({
    name: "555",
  });
  const [showProjects, setShowProjects] = useState();
  const [loading, setLoading] = useState(false);
  async function getPosts() {
    try {
      const response = await axiosClient.get("http://127.0.0.1:8000/api/users");
      setShowPost(response.data);
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  }
  async function getProjects() {
    try {
      const response = await axiosClient.get("/utilisateur/getProjects");
      setShowProjects(response.data);
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPosts();
    getProjects();
  }, []);
  let useers;
  showUser.user
    ? (useers = showUser.user)
    : (useers = {
        name: "loading...",
      });

  // console.log(showProjects);

  return (
    <div>
      <div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Project Created Successfuly
          </Alert>
        </Snackbar>
      </div>
      <div className="flex justify-between my-3 mx-3">
        <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 my-auto">
          My Projects
        </span>
        <Button
          className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
          onPress={onOpen}
        >
          Create a new Project
        </Button>
      </div>

      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create a new Project
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 grid grid-cols-6 gap-6"
                >
                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Project Name
                    </label>

                    <Input
                      type="text"
                      id="name"
                      placeholder="Enter your project name"
                      {...register("name")}
                    />
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="Email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Project Description
                    </label>

                    <Input
                      type="text"
                      id="description"
                      placeholder="Enter your project description"
                      {...register("description")}
                    />
                  </div>

                  <div className="col-span-6">
                    <Select
                      items={useers}
                      label="Assigned to"
                      variant="bordered"
                      isMultiline={true}
                      selectionMode="multiple"
                      placeholder="Select a user"
                      labelPlacement="outside"
                      {...register("team")}
                      classNames={{
                        base: "",
                        trigger: "min-h-12 py-2",
                      }}
                      renderValue={(items) => {
                        return (
                          <div className="flex flex-wrap gap-2 w-full">
                            {items.map((item) => (
                              <div
                                key={item.key}
                                className="flex items-center gap-2"
                              >
                                <Avatar
                                  alt={item.data.user.username}
                                  className="flex-shrink-0"
                                  size="sm"
                                  src={`http://127.0.0.1:8000/storage/images/profile/${item.data.user.picture}`}
                                />
                                <div className="flex flex-col">
                                  <span>{item.data.user.username}</span>
                                  <span className="text-default-500 text-tiny">
                                    ({item.data.user.email})
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      }}
                    >
                      {(user) => (
                        <SelectItem
                          key={user.id}
                          textValue={user.user.username}
                        >
                          <div className="flex gap-2 items-center">
                            <Avatar
                              alt={user.user.username}
                              className="flex-shrink-0"
                              size="sm"
                              src={`http://127.0.0.1:8000/storage/images/profile/${user.user.picture}`}
                            />
                            <div className="flex flex-col">
                              <span className="text-small">
                                {user.user.username}
                              </span>
                              <span className="text-tiny text-default-400">
                                {user.user.email}
                              </span>
                            </div>
                          </div>
                        </SelectItem>
                      )}
                    </Select>
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                      Create Project
                    </button>
                  </div>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="m-3">
        <UserProjectTable projects={showProjects} />
      </div>
    </div>
  );
};

export default UserProjects;
