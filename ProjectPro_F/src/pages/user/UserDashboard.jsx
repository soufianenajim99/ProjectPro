import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import React from "react";

const UserDashboard = () => {
  const data = [
    { id: 0, value: 10, label: "Projects Completed" },
    { id: 1, value: 15, label: "Projects Pending" },
    { id: 2, value: 20, label: "Projects Status" },
  ];
  return (
    <div className="flex flex-col gap-10">
      <div className=" flex justify-center items-center flex-col gap-4">
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
        <h1 className=" font-semibold">Projects Stats</h1>
      </div>
      <div className="flex justify-around">
        <div className=" flex justify-center items-center flex-col gap-4">
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: [
                  "Project A",
                  "Project B",
                  "Project C",
                  "Project D",
                  "Project E",
                  "Project F",
                  "Project G",
                  "Project H",
                  "Project I",
                ],
              },
            ]}
            series={[{ data: [4, 3, 5, 6, 7, 8, 8, 9, 10] }]}
            width={500}
            height={300}
          />
          <h1 className=" font-semibold">Popular Projects</h1>
        </div>

        <div className=" flex justify-center items-center flex-col gap-4">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={500}
            height={300}
          />
          <h1 className=" font-semibold">Users Stats</h1>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
