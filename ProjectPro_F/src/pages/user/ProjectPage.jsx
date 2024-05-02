import { KanbanTable } from "@/components/ui/user/KanbanTable";
import { Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ProjectPage = () => {
  let { state } = useLocation();

  const project = state.project;

  console.log(project.sprints);
  const [selectedSprintBacklogId, setSelectedSprintBacklogId] = useState("");

  const handleSelectChange = (event) => {
    setSelectedSprintBacklogId(event.target.value);
  };
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              {project.name}
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              {project.description}
            </p>
          </header>
          <div className=" flex items-center justify-center mt-4">
            <Select
              className=" w-1/3"
              label="Sprint"
              placeholder="Sprint"
              onChange={handleSelectChange}
              // {...register("duree")}
            >
              {project.sprints.map((sprint) => (
                <SelectItem
                  key={sprint.sprint_id}
                  value={sprint.sprint_backlog.id}
                >
                  {sprint.name}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        {/* {selectedSprintBacklogId && (
          <div>Selected Sprint Backlog ID: {selectedSprintBacklogId}</div>
        )} */}
        <KanbanTable project={project} sbd={selectedSprintBacklogId} />
      </section>
    </div>
  );
};

export default ProjectPage;
