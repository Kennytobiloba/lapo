"use client"
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', uv: 6000, pv: 2400, amt: 2400 },
  { name: 'Tue', uv: 2000, pv: 1398, amt: 2210 },
  { name: 'Wed', uv: 300, pv: 9800, amt: 2290 },
  { name: 'Thu', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Fri', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Sat', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Sun', uv: 3490, pv: 4300, amt: 2100 },
];

const scaleData = data.map(item => ({
    ...item,
    uv: item.uv / 100,
    pv: item.pv / 100,
  }));

const LineCharts = () => {
  return (
      <div className='w-full h-full'>
        <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={scaleData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            {/* Set Y-axis domain to show range from 0 to 100 */}
            <YAxis
            domain={[0, 100]} // Set Y-axis domain to 0 to 100
            ticks={[20, 40, 60, 80, 100]} // Set specific ticks
           />
            <Tooltip />
            {/* Only the line color is set, no fill or background */}
            <Area type="monotone" dataKey="uv" stroke="#4DAF01" fill="none" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LineCharts;
