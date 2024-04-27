import axiosClient from "@/axiosClient";
import AdminProjectsTable from "@/components/ui/admin/AdminProjectsTable";
import { Box, LinearProgress } from "@mui/material";
import { Chip } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

const AdminProjects = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleProject = () => {
    setRefreshKey((oldKey) => oldKey + 1);
  };
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
  }, [refreshKey]);
  return (
    <div>
      <div className="flex justify-between my-3 mx-3">
        <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 my-auto">
          Projects
        </span>
        <Chip color="success" variant="shadow">
          projects list
        </Chip>
      </div>
      <div className="">
        {showProjects ? (
          <AdminProjectsTable
            projects={showProjects}
            onActionComplete={handleProject}
          />
        ) : (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
      </div>
    </div>
  );
};

export default AdminProjects;
