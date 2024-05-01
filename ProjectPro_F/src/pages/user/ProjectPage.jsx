import { KanbanTable } from "@/components/ui/user/KanbanTable";
import React from "react";
import { useLocation } from "react-router-dom";

const ProjectPage = () => {
  let { state } = useLocation();

  const project = state.project;

  // console.log(project);
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
        </div>
        <KanbanTable project={project} />
      </section>
    </div>
  );
};

export default ProjectPage;
