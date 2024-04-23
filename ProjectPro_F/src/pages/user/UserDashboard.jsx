import { PieChart } from "@mui/x-charts";
import React from "react";

const UserDashboard = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="">
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "Projects Completed" },
                { id: 1, value: 15, label: "Projects Involved" },
                { id: 2, value: 20, label: "Projects Pending" },
              ],
            },
          ]}
          width={600}
          height={200}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
