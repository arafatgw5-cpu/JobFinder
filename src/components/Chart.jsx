"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", users: 400 },
  { month: "Feb", users: 700 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 900 },
  { month: "May", users: 1200 },
  { month: "Jun", users: 800 },
];

export default function Chart() {
  return (
    <div className="w-full h-[400px] border rounded-xl p-5 shadow-md">
      <h2 className="text-2xl font-bold mb-5">
        User Analytics
      </h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#000"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}