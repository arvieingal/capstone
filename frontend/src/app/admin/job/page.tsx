"use client"
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState, useEffect } from 'react'
import Image from 'next/image';
import axios from 'axios';
import { jobs } from 'googleapis/build/src/apis/jobs';
// Define the Job interface
interface Job {
  id: string;
  job_name: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
  location: string;
  status: string;
}

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJob, setFilteredJob] = useState<Job[]>([]); 
  const [job, setJob] = useState('');
  const router = useRouter();


  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/jobs'); // Adjust the URL based on your backend route
      const jobs: Job[] = await response.json();
      setFilteredJob(jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Fetch jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  // Filter jobs based on search term
  useEffect(() => {
    setFilteredJob(prevJobs => 
      prevJobs.filter(job => 
        job.job_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

    const handleEdit = (id: string) => {
    router.push(`/admin/job/edit/${id}`);
  };

  // Delete user function
  const handleDelete = async (id: string) => {
    // e.preventDefault();
    // const confirmDelete = window.confirm(
    //   "Are you sure you want to delete this job?"
    // );
    // if (confirmDelete) {
    //   try {
    //     await axios.delete(`http://localhost:8000/api/job/${id}`);
    //     setJob(job.filter((job) => job._id !== id));
    //     console.log("job deleted successfully");
    //   } catch (error) {
    //     console.error("Error deleting job:", error);
    //   }
    // }
  };
  // Function to format date as "Month Day, Year" (e.g., "October 10, 2024")
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};


  function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(event.target.value);
  }

  function handleAddJob(event: React.MouseEvent<HTMLButtonElement>): void {
    router.push('/admin/job/add');
  }  

  return (
    <div className="p-4 pt-[4rem]">
      <h1 className="text-2xl font-bold mb-4 flex items-center justify-center">Manage Jobs</h1>
      <div className='flex flex-row md:flex-row items-center pt-4 gap-2'>
        <button 
          className='bg-green-800 text-white px-4 py-2 rounded-md  w-[10rem]'
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
      <div className='pt-[2rem]'>
      <table className="w-full border-collapse border border-gray-300 ">
        <thead>
          <tr className="bg-green-800 text-white">
            <th className="border border-gray-300 p-2 font-light">ID</th>
            <th className="border border-gray-300 p-2 font-light">Job Title</th> 
            <th className="border border-gray-300 p-2 font-light">Company</th>
            <th className="border border-gray-300 p-2 font-light">Location</th>
            <th className="border border-gray-300 p-2 font-light">Start Date</th>
            <th className="border border-gray-300 p-2 font-light">End Date</th>
            <th className="border border-gray-300 p-2 font-light">Status</th>
            <th className="border border-gray-300 p-2 font-light">Option</th>
          </tr>
        </thead>
        <tbody>
        {filteredJob.map((job: Job) => (
          <tr key={job.id} className="hover:bg-gray-50">
            <td className="py-2 px-4 border-b border-r">{job.id}</td>
            <td className="border border-gray-300 p-2">{job.job_name}</td>
            <td className="border border-gray-300 p-2">{job.company}</td>
            <td className="border border-gray-300 p-2">{job.location}</td>
            <td className="border border-gray-300 p-2">{formatDate(job.start_date)}</td>
            <td className="border border-gray-300 p-2">{formatDate(job.end_date)}</td>
            <td className="border border-gray-300 p-2">{job.status}</td>
            <td className="py-2 px-4 border-b flex items-center justify-center space-x-2">
                    {/* Edit icon */}
                    <Image
                      src="/icons/edit.png"
                      width={22}
                      height={22}
                      alt="Picture of the author"
                      onClick={() => handleEdit(job.id)}
                    />
                    {/* Delete icon */}
                    <Image
                      src="/icons/delete.png"
                      width={22}
                      height={22}
                      alt="Picture of the author"
                      onClick={() => handleDelete(job.id)}
                    />
                  </td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Jobs;
