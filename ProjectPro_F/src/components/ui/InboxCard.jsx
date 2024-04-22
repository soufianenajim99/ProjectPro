import React from "react";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { Avatar } from "@nextui-org/react";

const InboxCard = ({ info }) => {
  return (
    <div>
      <Card className="mt-6 w-11/12 flex">
        <CardBody className=" flex gap-5 items-center justify-between">
          <div className="flex gap-4 items-center">
            <Avatar
              isBordered
              src={`http://127.0.0.1:8000/storage/images/profile/${info.scrum_master_picture}`}
            />
            <div>
              <Typography variant="h5" color="blue-gray" className="">
                {info.scrum_master_username}
              </Typography>
              <div className=" flex gap-2">
                <Typography>Invited you to join his Project </Typography>
                <Typography color="green">{info.project_name}</Typography>
              </div>
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
  );
};

export default InboxCard;
