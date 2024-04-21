import React from "react";
import { Avatar, Chip } from "@nextui-org/react";
import { Button } from "@material-tailwind/react";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const UserInbox = () => {
  return (
    <div>
      <div className="flex justify-between my-3 mx-3">
        <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 my-auto">
          Notifications
        </span>
        <Chip color="success" variant="shadow">
          Not read
        </Chip>
      </div>
      <div>
        <div className="">
          <Card className="mt-6 w-11/12 flex">
            <CardBody className=" flex gap-5 items-center justify-between">
              <div className="flex gap-4 items-center">
                <Avatar
                  isBordered
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <Typography variant="h5" color="blue-gray" className="">
                    Marco
                  </Typography>
                  <Typography>
                    Invited you to join his Project teslabuild
                  </Typography>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button color="red" className="rounded-full">
                  Refusez
                </Button>
                <Button color="green" className="rounded-full">
                  Accpeter
                </Button>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 w-11/12 flex">
            <CardBody className=" flex gap-5 items-center justify-between">
              <div className="flex gap-4 items-center">
                <Avatar
                  isBordered
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <Typography variant="h5" color="blue-gray" className="">
                    Marco
                  </Typography>
                  <Typography>
                    Invited you to join his Project teslabuild
                  </Typography>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button color="red" className="rounded-full">
                  Refusez
                </Button>
                <Button color="green" className="rounded-full">
                  Accpeter
                </Button>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 w-11/12 flex">
            <CardBody className=" flex gap-5 items-center justify-between">
              <div className="flex gap-4 items-center">
                <Avatar
                  isBordered
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <Typography variant="h5" color="blue-gray" className="">
                    Marco
                  </Typography>
                  <Typography>
                    Invited you to join his Project teslabuild
                  </Typography>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button color="red" className="rounded-full">
                  Refusez
                </Button>
                <Button color="green" className="rounded-full">
                  Accpeter
                </Button>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 w-11/12 flex">
            <CardBody className=" flex gap-5 items-center justify-between">
              <div className="flex gap-4 items-center">
                <Avatar
                  isBordered
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <Typography variant="h5" color="blue-gray" className="">
                    Marco
                  </Typography>
                  <Typography>
                    Invited you to join his Project teslabuild
                  </Typography>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button color="red" className="rounded-full">
                  Refusez
                </Button>
                <Button color="green" className="rounded-full">
                  Accpeter
                </Button>
              </div>
            </CardBody>
          </Card>
          <Card className="mt-6 w-11/12 flex">
            <CardBody className=" flex gap-5 items-center justify-between">
              <div className="flex gap-4 items-center">
                <Avatar
                  isBordered
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <div>
                  <Typography variant="h5" color="blue-gray" className="">
                    Marco
                  </Typography>
                  <Typography>
                    Invited you to join his Project teslabuild
                  </Typography>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button color="red" className="rounded-full">
                  Refusez
                </Button>
                <Button color="green" className="rounded-full">
                  Accpeter
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserInbox;
