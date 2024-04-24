import axiosClient from "@/axiosClient";
import AdminProjectsTable from "@/components/ui/admin/AdminProjectsTable";
import React, { useEffect, useState } from "react";

const AdminProjects = () => {
  const [showProjects, setShowProjects] = useState();
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
        <AdminProjectsTable />
      </div>
    </div>
  );
};

export default AdminProjects;
