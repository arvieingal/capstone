"use client"
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'

// Sample job data (replace this with actual data fetching logic)
const jobsData = [
  { id: 1, title: 'Software Engineer', company: 'Tech Co', location: "Lumbang Public Market", status: 'Open' },
  { id: 2, title: 'Product Manager', company: 'Startup Inc', location: "Lumbang Public Market", status: 'Closed' },
  { id: 3, title: 'UX Designer', company: 'Design Studio', location: "Lumbang Public Market", status: 'Open' },
  
]

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(event.target.value);
  }

  function handleAddJob(event: React.MouseEvent<HTMLButtonElement>): void {
    // Implement navigation to add job page
    router.push('/admin/job/add');
  }

  return (
    <div className="p-4 pt-[4rem]">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Manage Jobs</h1>
      <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-6 pt-4'>
          <button 
            className='bg-green-700 text-white px-4 py-2 rounded-md mb-2 md:mb-0 w-[10rem]'
            onClick={handleAddJob}
          >
            Add Jobs
          </button>
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-green-800 text-white">
            <th className="border border-gray-300 p-2 font-light">ID</th>
            <th className="border border-gray-300 p-2 font-light">Job Name</th>
            <th className="border border-gray-300 p-2 font-light">Company</th>
            <th className="border border-gray-300 p-2 font-light">Location</th>
            <th className="border border-gray-300 p-2 font-light">Status</th>
          </tr>
        
         
        </thead>
        <tbody>
          {jobsData.map((job) => (
            <tr key={job.id}>
              <td className="border border-gray-300 p-2">{job.id}</td>
              <td className="border border-gray-300 p-2">{job.title}</td>
              <td className="border border-gray-300 p-2">{job.company}</td>
              <td className="border border-gray-300 p-2">{job.location}</td>
              <td className="border border-gray-300 p-2">{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Jobs