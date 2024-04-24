import axiosClient from "@/axiosClient";
import AdminProjectsTable from "@/components/ui/admin/AdminProjectsTable";
import React, { useEffect, useState } from "react";

const AdminProjects = () => {
  const [showProjects, setShowProjects] = useState();
  const [loading, setLoading] = useState(false);
  async function getProjects() {
    try {
      const response = await axiosClient.get("/admin/getprojects");
      setShowProjects(response.data);
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProjects();
  }, []);
  // console.log(showProjects);
  return (
    <div>
      <div className=" mt-28">
        <AdminProjectsTable projects={showProjects} />
      </div>
    </div>
  );
};

export default AdminProjects;
