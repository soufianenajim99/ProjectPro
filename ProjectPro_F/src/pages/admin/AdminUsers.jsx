import axiosClient from "@/axiosClient";
import AdminUsersTable from "@/components/ui/admin/AdminUsersTable";
import { Box, LinearProgress } from "@mui/material";
import { Chip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const AdminUsers = () => {
  const [showUsers, setShowUsers] = useState();
  const [loading, setLoading] = useState(false);
  async function getUsers() {
    try {
      const response = await axiosClient.get("/admin/getusers");
      setShowUsers(response.data);
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
  console.log(showUsers);
  return (
    <div>
      <div className="flex justify-between my-3 mx-3">
        <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 my-auto">
          Users
        </span>
        <Chip color="success" variant="shadow">
          Users lists
        </Chip>
      </div>
      <div className="">
        {showUsers ? (
          <AdminUsersTable useers={showUsers} />
        ) : (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;
