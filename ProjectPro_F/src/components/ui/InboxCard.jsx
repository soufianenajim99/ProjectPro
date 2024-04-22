import React, { useState } from "react";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { Avatar } from "@nextui-org/react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axiosClient from "@/axiosClient";

const InboxCard = ({ info, onActionComplete }) => {
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [opener, setOpener] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const accepte = (id) => {
    setLoading(true);
    try {
      axiosClient.get(`/utilisateur/accepter_invi/${id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setOpen(true);
      setTimeout(onActionComplete, 2000);
    }
  };
  const refuser = (id) => {
    setLoading(true);
    try {
      axiosClient.get(`/utilisateur/refuser_invi/${id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setOpener(true);
      setTimeout(onActionComplete, 2000);
    }
  };

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
            Vous avez accepter l'invitation de {info.scrum_master_username}
          </Alert>
        </Snackbar>
        <Snackbar open={opener} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Vous avez refuser l'invitation de {info.scrum_master_username}
          </Alert>
        </Snackbar>
      </div>
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
            <Button
              onClick={() => refuser(info.invitation_id)}
              color="red"
              className="rounded-full"
            >
              Refusez
            </Button>
            <Button
              onClick={() => accepte(info.invitation_id)}
              color="green"
              className="rounded-full"
            >
              Accpeter
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default InboxCard;
