import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Chip } from "@nextui-org/react";

const AdminDashboard = () => {
  const data = [
    { id: 0, value: 10, label: "Tsks Completed" },
    { id: 1, value: 15, label: "Projects" },
    { id: 2, value: 20, label: "series C" },
  ];
  return (
    <div className="flex justify-between my-3 mx-3">
      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 my-auto">
        Notifications
      </span>
      <Chip color="success" variant="shadow">
        Not read
      </Chip>
    </div>
  );
};

export default AdminDashboard;

{
  /* <div className="">
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: "global", highlighted: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            },
          ]}
          width={600}
          height={200}
        />
      </div> */
}
