import { Alert } from "@mui/material";
import { Chip } from "@nextui-org/react";
import React from "react";

const AdminInbox = () => {
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
      <Alert variant="filled" severity="info">
        No Notifications for the Moment.
      </Alert>
    </div>
  );
};

export default AdminInbox;
