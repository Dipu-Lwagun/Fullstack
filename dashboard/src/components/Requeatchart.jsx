import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Requeatchart = () => {
  const data = [
    { name: "Jan", request: 410 },
    { name: "Feb", request: 340 },
    { name: "Mar", request: 280 },
    { name: "Apr", request: 100 },
    { name: "May", request: 320 },
    { name: "Jun", request: 390 },
    { name: "Jul", request: 350 },
  ];

  return (
    <div
      className=" w-[100%] md:w-[50%]"
      style={{ height: "300px", width: "100%"  }}
    >
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 3" />
          <XAxis dataKey="name" />
          <YAxis
            tickCount={20} // Adjusting the number of ticks
            domain={[0, 420]} // Defining Y axis range
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="request"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Requeatchart;
