'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'May', uv: 3000, pv: 2000, amt: 2400 },
    { name: 'June', uv: 7000, pv: 1398, amt: 2210 },
    { name: 'Jul', uv: 1500, pv: 1000, amt: 2290 },
    { name: 'Aug', uv: 2080, pv: 1000, amt: 2000 },
    { name: 'Sep', uv: 1500, pv: 1000, amt: 2181 },
    { name: 'Aug', uv: 6390, pv: 1000, amt: 2500 },
    { name: 'Nov', uv: 5490, pv: 1300, amt: 2100 },
];

// Scale down the data by a factor of 100
const scaleData = data.map(item => ({
  ...item,
  uv: item.uv / 100,
  pv: item.pv / 100,
}));

const Barchart = () => {
    return (
        <div className='w-full h-full'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={scaleData} // Use scaled data
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    {/* Remove CartesianGrid if you don't want any grid lines */}
                    
                    {/* X Axis and Y Axis */}
                    <XAxis dataKey="name" />
                    <YAxis
                        domain={[0, 100]} // Set Y-axis domain to 0 to 100
                        ticks={[20, 40, 60, 80, 100]} // Set specific ticks
                    />

                    {/* Tooltips and Legends */}
                    <Tooltip />
                    <Legend />
                    
                    {/* Change 'pv' to 'Personalized' and 'uv' to 'Instant' with rounded corners */}
                    <Bar
                        dataKey="pv"
                        stackId="a"
                        fill="#014DAF"
                        name="Personalized"
                        radius={[2, 2, 0, 0]} // Rounded top-left and top-right corners
                    />
                    <Bar
                        dataKey="uv"
                        stackId="a"
                        fill="#CCE2FF"
                        name="Instant"
                        radius={[10, 10, 0, 0]} // Rounded top-left and top-right corners
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Barchart;
