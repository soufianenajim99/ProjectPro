import React from "react";

const UserProjects = () => {
  return (
    <div>
      <div className="flex justify-between my-3 mx-3">
        <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 my-auto">
          My Projects
        </span>
        <a
          className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          Create a Project
        </a>
      </div>
    </div>
  );
};

export default UserProjects;
