import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import axiosClient from "@/axiosClient";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const UserProjectsList = () => {
  const [showProjects, setShowProjects] = useState();
  const [dense, setDense] = useState(false);
  const [loading, setLoading] = useState(false);
  const [secondary, setSecondary] = useState(true);

  //get projects
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
    getProjects();
  }, []);

  console.log(showProjects);
  return (
    <div>
      {" "}
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2, ml: 4 }} variant="h6" component="div">
          Projects List
        </Typography>
        <Demo>
          <List dense={dense} className=" flex flex-col gap-4">
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          </List>
        </Demo>
      </Grid>
    </div>
  );
};

export default UserProjectsList;
