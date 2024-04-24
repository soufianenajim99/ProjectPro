import axiosClient from "@/axiosClient";
import AdminUsersTable from "@/components/ui/admin/AdminUsersTable";
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
      <div className=" mt-28">
        <AdminUsersTable useers={showUsers} />
      </div>
    </div>
  );
};

export default AdminUsers;
