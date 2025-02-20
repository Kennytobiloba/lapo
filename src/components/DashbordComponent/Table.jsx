"use client"
import React, { useState } from 'react'

const Table = () => {
    const initialData = [
        { container: 'Container A', branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Ready' },
        { container: 'Container B', branch: 'Corporate', cardType: 'Personalized', quantity: 5, status: 'In Progress' },
        { container: 'Container C', branch: 'Corporate', cardType: 'Instant', quantity: 8, status: 'Pending' },
        { container: 'Container D', branch: 'Corporate', cardType: 'Personalized', quantity: 20, status: 'Acknowledged' }
      ];
    
      const [data, setData] = useState(initialData);
    
      const handleStatusChange = (index, status) => {
        const updatedData = [...data];
        updatedData[index].status = status;
        setData(updatedData);
      };
  return (
    <div>
          <div className="overflow-x-auto mt-2">
      <table className="w-full table-auto">
        <thead className='bg-[#F1F7FF] border border-[#E2E2E2] text-black text-[12px] font-[500px]'>
          <tr className=' px-2 py-4'>
            
            <th className="px-4 py-2 text-left">Branch</th>
            <th className="px-4 py-2 text-left">Card Type</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t text-[10px] text-[#475467]">
              
              <td className="px-4 py-2">{row.branch}</td>
              <td className="px-4 py-2">{row.cardType}</td>
              <td className="px-4 py-2">{row.quantity}</td>
              <td className="px-4 py-2">
                <button
                  className={`${
                    row.status === 'Ready'
                      ? 'bg-[#ABEFC6] text-[#067647]'
                      : row.status === 'In Progress'
                      ? 'bg-[#FED489] text-[#854708]'
                      : row.status === 'Pending'
                      ? 'bg-[#EAECF0] text-[#344094]'
                      : row.status === 'Acknowledge'
                      ? 'bg-[#B2DDFF] text-[#175cD3]'
                      : 'bg-gray-500'
                      
                    //   : 'bg-gray-500'
                  } text-white px-4 py-2 rounded-[16px]`}
                  onClick={() => {
                    const nextStatus = getNextStatus(row.status);
                    handleStatusChange(index, nextStatus);
                  }}
                >
                  {row.status}
                </button>
              </td>
              <td className="px-4 py-2">
                <button
                  className=" text-[#014DAF] px-4 py-2 text-[10px]"
                  onClick={() => alert(`Viewing details for ${row.container}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
  )
}

function getNextStatus(currentStatus) {
    const statuses = ['Ready', 'In Progress', 'Pending', 'Acknowledged'];
    const currentIndex = statuses.indexOf(currentStatus);
    return statuses[(currentIndex + 1) % statuses.length]; // Cycles back to the first status
  }

export default Table