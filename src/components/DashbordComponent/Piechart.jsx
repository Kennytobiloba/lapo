"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data02 = [
  { name: "Active", value: 140 },
  { name: "Expired", value: 700 },
  { name: "Inactive", value: 60 },
  { name: "Blocked", value: 20 },
];

const COLORS = ["#FFBA24", "#01A4AF", "#014DAF", "#8020E7"];

const Piechart = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data02}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={95} // Adjusted for better spacing
            outerRadius={110} // Adjusted for better spacing
          >
            {data02.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-1">
        <p className="text-[12px] font-[500] text-[#808080] font-sans">Total Cards</p>
        <h1 className="text-[24px] font-[500] text-[#808080] font-sans">2,450</h1>
      </div>

      {/* Bullet Legend */}
      <div className=" flex flex-wrap mb-6 gap-4">
        {data02.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="inline-block rounded-full"
              style={{
                backgroundColor: COLORS[index],
                width: "16px",
                height: "16px",
              }}
            ></span>
            <p className="text-sm text-[#808080] font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Piechart;
