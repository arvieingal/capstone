"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import router from 'next/router';


const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleAddEvents = () => {
    router.push('/admin/events/add');
  };

  return (
    <div className='container mx-auto pt-[4rem]'>
      <h1 className='text-2xl font-bold mb-4 flex items-center justify-center'>Manage Events</h1>
      <div className='flex flex-col md:flex-row gap-2 mb-4 pt-[2rem]'>
        <button 
          className='bg-green-700 text-white px-4 py-2 rounded-md w-full md:w-[10rem]'
          onClick={handleAddEvents}
        >
          Add Events
        </button>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>
      <table className='w-full border-collapse border border-gray-300 '>
        <thead>
          <tr className='bg-green-800 text-white '>
            <th className='border border-gray-300 p-2 font-light'>Event Title</th>
            <th className='border border-gray-300 p-2 font-light'>Start Date</th>
            <th className='border border-gray-300 p-2 font-light'>End Date</th>
            <th className='border border-gray-300 p-2 font-light'>Location</th>
            <th className='border border-gray-300 p-2 font-light'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row - you'll want to map over your actual event data here */}
          <tr>
            <td className='border border-gray-300 p-2'>Sample Event</td>
            <td className='border border-gray-300 p-2'>2024-01-01</td>
            <td className='border border-gray-300 p-2'>2024-01-06</td>
            <td className='border border-gray-300 p-2'>Lumbang Brgy.Hall</td>
            <td className='border border-gray-300 p-2'>
              <button className='bg-blue-500 text-white px-2 py-1 rounded mr-2'>Edit</button>
              <button className='bg-red-500 text-white px-2 py-1 rounded'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Events