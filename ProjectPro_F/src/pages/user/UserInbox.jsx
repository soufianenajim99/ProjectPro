import React, { useEffect, useState } from "react";
import { Avatar, Chip } from "@nextui-org/react";
import { Button, Spinner } from "@material-tailwind/react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import axiosClient from "@/axiosClient";
import InboxCard from "@/components/ui/InboxCard";
import { Password } from "@mui/icons-material";
import { Box, LinearProgress } from "@mui/material";

const UserInbox = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  // Function to handle refresh
  const handleRefresh = () => {
    setRefreshKey((oldKey) => oldKey + 1);
  };

  console.log(refreshKey);

  const [loading, setLoading] = useState(true);
  const [showNoti, setshowNoti] = useState(null);

  const [open, setOpen] = useState(false);

  async function getInbox() {
    setLoading(true);
    try {
      const response = await axiosClient.get(`/utilisateur/inbox`);
      // .then(console.log(response.data));
      setshowNoti(response.data.project_Inbox);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getInbox();
  }, [refreshKey]);

  console.log(showNoti);
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
          {loading ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          ) : showNoti && showNoti.length > 0 ? (
            showNoti.map((item, index) => (
              <InboxCard
                key={index}
                info={item}
                onActionComplete={handleRefresh}
              />
            ))
          ) : (
            <Alert variant="filled" severity="info">
              No Notifications for the Moment.
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInbox;
